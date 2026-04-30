CREATE TABLE employees (
    id BIGSERIAL PRIMARY KEY,
    employee_code VARCHAR(50) NOT NULL UNIQUE,
    official_email VARCHAR(255) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL REFERENCES users(id),
    grade_id BIGINT NOT NULL REFERENCES grades(id),
    manager_id BIGINT REFERENCES employees(id)
);

CREATE TABLE reporting_hierarchy (
    id BIGSERIAL PRIMARY KEY,
    effective_from DATE NOT NULL,
    effective_to DATE,
    employee_id BIGINT NOT NULL REFERENCES employees(id),
    manager_id BIGINT NOT NULL REFERENCES employees(id)
);

CREATE TABLE employee_addresses (
    id BIGSERIAL PRIMARY KEY,
    address_type VARCHAR(50) NOT NULL,
    line1 VARCHAR(255) NOT NULL,
    employee_id BIGINT NOT NULL REFERENCES employees(id)
);

CREATE TABLE employee_emergency_contacts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255),
    employee_id BIGINT NOT NULL REFERENCES employees(id)
);

CREATE TABLE employee_bank_details (
    id BIGSERIAL PRIMARY KEY,
    bank_name VARCHAR(150) NOT NULL,
    account_holder_name VARCHAR(150) NOT NULL,
    employee_id BIGINT NOT NULL REFERENCES employees(id)
);

CREATE TABLE employee_tax_details (
    id BIGSERIAL PRIMARY KEY,
    pan_number VARCHAR(20),
    uan VARCHAR(20),
    employee_id BIGINT NOT NULL REFERENCES employees(id)
);

CREATE TABLE employee_documents (
    id BIGSERIAL PRIMARY KEY,
    document_type VARCHAR(100) NOT NULL,
    document_number VARCHAR(100),
    employee_id BIGINT NOT NULL REFERENCES employees(id),
    uploaded_by BIGINT NOT NULL REFERENCES users(id)
);
