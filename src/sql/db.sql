DROP DATABASE IF EXISTS insight_api;

CREATE DATABASE IF NOT EXISTS insight_api;

CREATE TABLE IF NOT EXISTS insights {
    id INT(11) NOT NULL AUTO_COMPLETE PRIMARY KEY;
    title VARCHAR(200) NOT NULL;
    description_idea TEXT NOT NULL;
    classification enum('Back-end', 'Design', 'Front-end', 'Mobile') NOT NULL;
    ideia_url TEXT NOT NULL;
    image_url TEXT;
    created_at DATETIME NOT NULL;
};



DESCRIBE insights;
