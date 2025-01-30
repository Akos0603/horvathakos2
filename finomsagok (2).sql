-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2025. Jan 28. 10:24
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `finomsagok`
--
CREATE DATABASE IF NOT EXISTS `finomsagok` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `finomsagok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hozzavalok`
--

CREATE TABLE `hozzavalok` (
  `Hozzavalok_neve` varchar(30) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Hozzavalok_id` int(11) NOT NULL,
  `hozzavalo_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `hozzavalok`
--

INSERT INTO `hozzavalok` (`Hozzavalok_neve`, `Hozzavalok_id`, `hozzavalo_ID`) VALUES
('Paradicsom', 1, 1),
('Cukor', 2, 1),
('Diszno hús', 3, 2),
('Víz', 4, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mertekegyseg`
--

CREATE TABLE `mertekegyseg` (
  `mennyiseg` int(20) NOT NULL,
  `mértékegység` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `mertekegyseg`
--

INSERT INTO `mertekegyseg` (`mennyiseg`, `mértékegység`, `id`) VALUES
(500, 'g', 1),
(2, 'dl', 2),
(2, 'ek', 3),
(5, 'db', 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszekoto`
--

CREATE TABLE `osszekoto` (
  `hozzavalok_id` int(11) NOT NULL,
  `receptek_id` int(11) NOT NULL,
  `ervenyes` int(1) NOT NULL,
  `etrend_id` int(10) NOT NULL,
  `mertekegyseg_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `osszekoto`
--

INSERT INTO `osszekoto` (`hozzavalok_id`, `receptek_id`, `ervenyes`, `etrend_id`, `mertekegyseg_id`) VALUES
(1, 1, 0, 0, 4),
(2, 1, 0, 0, 3),
(3, 2, 1, 1, 1),
(4, 2, 1, 1, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `receptek`
--

CREATE TABLE `receptek` (
  `Konyha` varchar(40) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Keszites` text CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Napszak` varchar(10) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Receptek_id` int(11) NOT NULL,
  `Receptek_neve` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `kep` binary(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `receptek`
--

INSERT INTO `receptek` (`Konyha`, `Keszites`, `Napszak`, `Receptek_id`, `Receptek_neve`, `kep`) VALUES
('Magyar', 'yes', 'reggel', 1, 'Paradicsom leves', 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
('Magyar', 'majd', 'Ebéd', 2, 'Nokedli Pörköltel', 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `regisztracio`
--

CREATE TABLE `regisztracio` (
  `Admin` int(1) NOT NULL,
  `Felhasznalo_id` int(11) NOT NULL,
  `E-mail` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Jelszo` varchar(30) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Felhasznalonev` varchar(30) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `sajatrecept` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `regisztracio`
--

INSERT INTO `regisztracio` (`Admin`, `Felhasznalo_id`, `E-mail`, `Jelszo`, `Felhasznalonev`, `sajatrecept`) VALUES
(0, 1, 'horvath0akos@gmail.com', 'jelszo', 'Akos0603', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `specialis_etrend`
--

CREATE TABLE `specialis_etrend` (
  `erzekenyseg` varchar(30) NOT NULL,
  `preferencia` varchar(30) NOT NULL,
  `id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `specialis_etrend`
--

INSERT INTO `specialis_etrend` (`erzekenyseg`, `preferencia`, `id`) VALUES
('Laktózérzékenység', '', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `hozzavalok`
--
ALTER TABLE `hozzavalok`
  ADD PRIMARY KEY (`Hozzavalok_id`),
  ADD KEY `hozzavalo_ID` (`hozzavalo_ID`);

--
-- A tábla indexei `mertekegyseg`
--
ALTER TABLE `mertekegyseg`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `osszekoto`
--
ALTER TABLE `osszekoto`
  ADD KEY `hozzavalok_id` (`hozzavalok_id`,`receptek_id`),
  ADD KEY `receptek_id` (`receptek_id`),
  ADD KEY `ervenyes` (`ervenyes`),
  ADD KEY `Etrend` (`etrend_id`),
  ADD KEY `mertekegyseg_id` (`mertekegyseg_id`);

--
-- A tábla indexei `receptek`
--
ALTER TABLE `receptek`
  ADD PRIMARY KEY (`Receptek_id`);

--
-- A tábla indexei `regisztracio`
--
ALTER TABLE `regisztracio`
  ADD PRIMARY KEY (`Felhasznalo_id`),
  ADD KEY `sajatrecept` (`sajatrecept`);

--
-- A tábla indexei `specialis_etrend`
--
ALTER TABLE `specialis_etrend`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `hozzavalok`
--
ALTER TABLE `hozzavalok`
  MODIFY `Hozzavalok_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `mertekegyseg`
--
ALTER TABLE `mertekegyseg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `receptek`
--
ALTER TABLE `receptek`
  MODIFY `Receptek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `regisztracio`
--
ALTER TABLE `regisztracio`
  MODIFY `Felhasznalo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `specialis_etrend`
--
ALTER TABLE `specialis_etrend`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `osszekoto`
--
ALTER TABLE `osszekoto`
  ADD CONSTRAINT `osszekoto_ibfk_1` FOREIGN KEY (`receptek_id`) REFERENCES `receptek` (`Receptek_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `osszekoto_ibfk_2` FOREIGN KEY (`hozzavalok_id`) REFERENCES `hozzavalok` (`Hozzavalok_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `osszekoto_ibfk_3` FOREIGN KEY (`mertekegyseg_id`) REFERENCES `mertekegyseg` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `regisztracio`
--
ALTER TABLE `regisztracio`
  ADD CONSTRAINT `regisztracio_ibfk_1` FOREIGN KEY (`sajatrecept`) REFERENCES `receptek` (`Receptek_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `specialis_etrend`
--
ALTER TABLE `specialis_etrend`
  ADD CONSTRAINT `specialis_etrend_ibfk_1` FOREIGN KEY (`id`) REFERENCES `osszekoto` (`etrend_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
