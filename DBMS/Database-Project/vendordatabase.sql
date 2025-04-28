CREATE DATABASE VendorManagement;

USE VendorManagement;

-- Vendor 
CREATE TABLE Vendor (
    VendorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    ServiceCategory VARCHAR(50),
    ComplianceCertification VARCHAR(150)
);
ALTER TABLE VendorContactInfo
CHANGE ContactInfo Phone VARCHAR(20) NOT NULL;

alter table Vendor
add Password varchar(20) NOT NULL;


alter table Vendor
modify Password varchar(1500) NOT NULL;
-- Contract Table
CREATE TABLE Contract (
    ContractID INT AUTO_INCREMENT PRIMARY KEY,
    VendorID INT NOT NULL,
    Terms TEXT,
    ExpiryDate DATE NOT NULL,
    Status ENUM('Active', 'Pending Renewal', 'Expired') DEFAULT 'Active',
    FOREIGN KEY (VendorID) REFERENCES Vendor(VendorID)
);

-- PurchaseOrder Table
CREATE TABLE PurchaseOrder (
    POID INT AUTO_INCREMENT PRIMARY KEY,
    ContractID INT NOT NULL,
    VendorID INT NOT NULL,
    ItemDescription VARCHAR(255) NOT NULL,
    Quantity INT NOT NULL,
    TotalCost FLOAT NOT NULL,
    FOREIGN KEY (ContractID) REFERENCES Contract(ContractID),
    FOREIGN KEY (VendorID) REFERENCES Vendor(VendorID)
);
ALTER TABLE PurchaseOrder
MODIFY COLUMN ContractID INT DEFAULT 0;

-- Budget Table
CREATE TABLE Budget (
    BudgetID INT AUTO_INCREMENT PRIMARY KEY,
    Department VARCHAR(100) NOT NULL,
    AllocatedAmount FLOAT NOT NULL,
    SpentAmount FLOAT NOT NULL,
    RemainingAmount FLOAT AS (AllocatedAmount - SpentAmount) STORED
);

-- Performance Table
CREATE TABLE Performance (
    PerformanceID INT AUTO_INCREMENT PRIMARY KEY,
    VendorID INT NOT NULL,
    Rating FLOAT CHECK (Rating BETWEEN 1 AND 5),
    Feedback TEXT,
    Date DATE NOT NULL,
    FOREIGN KEY (VendorID) REFERENCES Vendor(VendorID)
);

DELIMITER //

CREATE PROCEDURE RegisterVendor(
    IN VendorName VARCHAR(100),
    IN ContactInfo VARCHAR(100),
    IN ServiceCategory VARCHAR(50),
    IN ComplianceCert VARCHAR(150)
)
BEGIN
    INSERT INTO Vendor (Name, ContactInfo, ServiceCategory, ComplianceCertification)
    VALUES (VendorName, ContactInfo, ServiceCategory, ComplianceCert);
END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER NotifyContractRenewals 
BEFORE INSERT ON Contract
FOR EACH ROW
BEGIN
    IF NEW.ExpiryDate <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Contract is nearing expiration. Notify stakeholders!';
    END IF;
END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER CheckBudgetLimits
BEFORE INSERT ON PurchaseOrder
FOR EACH ROW
BEGIN
    DECLARE BudgetLimit FLOAT;
    SELECT AllocatedAmount - SpentAmount INTO BudgetLimit
    FROM Budget WHERE Department = 'Procurement'; -- Adjust department dynamically
    IF NEW.TotalCost > BudgetLimit THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Purchase Order exceeds department budget!';
    END IF;
END //

DELIMITER ;

DESCRIBE Vendor;
DESCRIBE Contract;
desc performance;
describe purchaseorder;
describe budget;
