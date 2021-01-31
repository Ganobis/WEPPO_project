DROP TABLE IF EXISTS urzytkownicy;

CREATE TABLE urzytkownicy (
    ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Login CHAR(50) NOT NULL,
    Haslo CHAR(256) NOT NULL,
    Imie CHAR(50),
    Nazwisko CHAR(50),
    Miasto CHAR(30),
    Adres CHAR(80),
    Email CHAR(100),
    Nr_telefonu CHAR(9),
    Administrator BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS produkty;

CREATE TABLE produkty (
	ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Nazwa CHAR(150) NOT NULL,
    Cena REAL,
    Marka CHAR(50),
    Opis TEXT,
    Zdjecie TEXT,
    Ilosc INT
);

DROP TABLE IF EXISTS zamowione;

CREATE TABLE zamowione (
	ID_zamowienia INT NOT NULL,
    ID_produktu INT NOT NULL
);

DROP TABLE IF EXISTS zamowienia;

CREATE TABLE zamowienia (
	ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    ID_urzytkownicy INT NOT NULL
);

ALTER TABLE zamowione
ADD FOREIGN KEY (ID_zamowienia) REFERENCES zamowienia(ID),
ADD FOREIGN KEY (ID_produktu) REFERENCES produkty(ID);

ALTER TABLE zamowienia
ADD FOREIGN KEY (ID_uzytkownicy) REFERENCES uzytkownicy(ID);