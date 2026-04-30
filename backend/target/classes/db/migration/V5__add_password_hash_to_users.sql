-- Add BCrypt password hash column to users table
ALTER TABLE users
    ADD COLUMN password_hash VARCHAR(255) NOT NULL DEFAULT '';

-- Remove the default after adding the column (production data must be seeded explicitly)
ALTER TABLE users
    ALTER COLUMN password_hash DROP DEFAULT;
