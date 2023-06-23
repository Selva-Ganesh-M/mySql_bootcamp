
// #region : DB Access

// 1. create database mydb;

// 2. drop database mydb;

// 3. alter database mydb read only = 1;

        // now you can't drop the database you have to turn off read mode to do it

        // 3.1 alter database mydb read only = 0;

// #endregion : DB Access

// #region : Table Access


    // #region : 1. on table
    
        // #region : 1. create table

            // 1. create table employees (
            //     empId INT,
            //     fName VARCHAR(50),
            //     lName VARCHAR(50),
            //     hourlyPay DECIMAL(5, 2),
            //     hiredDate DATE,
            // )

        // #endregion : create table

        // 2. select * from employees;

        // 3. rename table employees to workers;

    
    // #endregion : on table

    // #region : 2. Alter table columns
    
        // #region : add new col to table

            // alter table employees
            // add phoneNumber varchar(15)
        
        // #endregion : add new col to table
    
        // #region : renaming column
        
            // alter table employees
            // rename column phoneNumber to email

        // #endregion : renaming column

        // #region : altering datatype of table column
        
            // alter table employee
            // modify column email varchar(100);
        
        // #endregion : altering datatype of table column

        // #region : moving a column
        
            // #region : moving to first place
            
                // alter table employees
                // modify email varchar(100)
                // first;
            
            // #endregion : moving to first place
        
            // #region : place it after a particular column

                // alter table employees
                // modify email varchar(100)
                // after lname;
            
            // #endregion : place it after a particular column

        // #endregion : moving a column

        // #region : dropping a column
        
            // alter table employees
            // drop column email;
        
        // #endregion : dropping a column

    // #endregion : 4. Alter table

    // #region : 3. insert table values

        // #region : inserting single row
        
            // insert into employee
            // values
        
        // #endregion : inserting single row
    
        // #region : inserting multiple rows
        
            // insert into employees
            // values (2, "selva", "sekar", 10.50, "2020-05-16"),
            //         (3, "sahaya", "livingston", 10.50, "2006-01-10"),
            //         (4, "sakthi", "lingesh", 10.50, "2000-01-19");
        
        // #endregion : inserting multiple rows

        // #region : adding only specific fields
        
            // insert into employees (empId, fName, lName)
            // values (5, "vivek", "anandan");
        
        // #endregion : adding only specific fields

    // #endregion : 3. insert table values

    // #region : 4. working with null
    
        // 1. select * from employees
        // where hire_date is NULL
        
        // 2. select * from employees
        // where hire_date is not NULL

    // #endregion : 4. working with null

    // #region : 5.update table values
    
        // #region : 5.1 update single field
        
            // update employees
            // set hourlyPay = 20.50
            // where empId = 5;
        
        // #endregion : 5.1 update single field
    
        // #region : 5.2 update multiple fields
        
            // update employees
            // set hourlyPay = 20.50,
            //     hiredDate = "2023-06-23"
            // where empId = 5;
        
        // #endregion : 5.2 update multiple fields
    
        // #region : update values to NULL
        
            // update employees
            // set hourlyPay = NULL
            // where empId = 5;

        // #endregion : update values to NULL

        // #endregion : 5.update table values

    // #region : deleting table values
    
        // #region : delete all entries
        
            // delete from emplees
                // exp: this line will delete all rows

        // #endregion : delete all entries
    
        // #region : delete specific entries
        
            // delete from employees
            // where empId = 1;
        
        // #endregion : delete specific entries

    // #endregion : deleting table values

// #endregion : Table Access


// #region : auto commit, commit, rollback

    // 1. autocommit is TRUE by default - it'll save every transanction we do, which in turn won't let us undo stuff.

    // So, we've gotta turn the autocommit off by the below line

        // set autocommit = False;

    // now the changes we make won't be saved

    // now we can use save points. We can use REVERT to revert back to the save points 

// #endregion : auto commit, commit, rollback


// #region : Date Time

    // #region : creation with datatype
    
        // create table dt ( myDate date, myTime time, myDateTime datetime);

    // #endregion : creation with datatype

    // #region : inserting datetime values
    
        // insert into dt  values ( current_date(), current_time(), now() );
    
    // #endregion : inserting datetime values

    // Note: 
        // current_date() + 1 => gives tommorow
        // like wise current_time() + seconds => future time accordingly

// #endregion : Date Time


// #region : constrains

    // #region : unique constrain

        // #region : create table with unique column
        
            // create table products(
            //     product_id INT;
            //     product_name VARCHAR(50) UNIQUE;
            //     price INT;
            // )
        
        // #endregion : create table with unique column

        // #region : converting a non-unique column to unique
        
            // alter table products
            // add constraint
            // unique (product_name);
        
        // #endregion : converting a non-unique column to unique

    // #endregion : unique constrain

    // #region : not null constrain
    
        // #region : create table with not NULL column
        
            // create table products(
            //     product_id INT;
            //     product_name VARCHAR(50) NOT NULL;
            //     price INT;
            // )
        
        // #endregion : create table with not NULL column
    
        // #region : alter prev exited col to NOT NULL
        
            // alter table products
            // modify price DECIMAL(4, 2) NOT null;
        
        // #endregion : alter prev exited col to NOT NULL

    // #endregion : not null constrain

    // #region : check
    
        // #region : check constrain for new table
        
            // create table employees(
            //     empId INT,
            //     fName VARCHAR(20),
            //     lName VARCHAR(20),
            //     hourlyPay DECIMAL(5,2),
            //     hiredDate Date,
            //     CHECK (hourlyPay >= 10.00),
    
            //     // the above check can be named like this
            //     COSNTRAIN chk_hourly_pay CHECK (hourlyPay >= 10.00),
            // )
    
        
        // #endregion : check constrain for new table
    
        // #region : alter prev -> check constrain
        
            // alter table employees
            // add constrain chk_hourly_pay CHECK (hourly_pay >= 10.0)
        
        // #endregion : alter prev -> check constrain
    
        // #region : delete a check
        
            // alter table employees
            // drop check chk_hourly_pay;
        
        // #endregion : delete a check

    // #endregion : check

    // #region : default
    
        // #region : creating new table
        
            // create table products (
            //     price DECIMAL(5, 2) DEFAULT 0;
            // )
        
        // #endregion : creating new table
    
        // #region : inserting into created table
        
            // insert into products(product_id, product_name)
            // values (104, "straw"),
            //        (104, "straw");
        
        // #endregion : inserting into created table

        // #region : alter prev table
        
            // alter table products
            // alter price set default 0
        
        // #endregion : alter prev table

        // #region : useCase
        
            // create table transactions(
            //     transaction_id INT,
            //     amount DECIMAL(5, 2),
            //     transanction_date DATETIME DEFAULT NOW()
            // );
        
        // #endregion : useCase

    // #endregion : default

// #endregion : constrains



