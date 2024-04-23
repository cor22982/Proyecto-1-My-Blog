CREATE TABLE IF NOT EXISTS Guatepedia (
    id SERIAL PRIMARY KEY,
    Pearson VARCHAR(255) NOT NULL,
    Few_Description TEXT NOT NULL,
    History TEXT NOT NULL,
    Crucial_Events TEXT NOT NULL,
    Curiosities TEXT NOT NULL,
    AlternativeText VARCHAR(255),
    AlternativeDescription TEXT NOT NULL,
    Text_References TEXT NOT NULL,
    images TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS autentificacion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);