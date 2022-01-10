-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 24, 2021 at 01:22 PM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.3.33-1+ubuntu20.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `unitedrestaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `SiteSettings`
--

CREATE TABLE `SiteSettings` (
  `id` int NOT NULL,
  `maintenance_mode` varchar(255) DEFAULT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` text,
  `facebook_links` varchar(255) DEFAULT NULL,
  `twitter_links` varchar(255) DEFAULT NULL,
  `google_plus_links` varchar(255) DEFAULT NULL,
  `linkedin_links` varchar(255) DEFAULT NULL,
  `instagram_links` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SiteSettings`
--

INSERT INTO `SiteSettings` (`id`, `maintenance_mode`, `site_name`, `phone_number`, `address`, `facebook_links`, `twitter_links`, `google_plus_links`, `linkedin_links`, `instagram_links`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, 'no', ' United Restaurants1', ' 9026574061', ' sss', ' 1', ' 2', ' ff', ' ss', ' kk', 'logo_1639717490126.png', '2021-11-29 13:37:30', '2021-12-24 13:22:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SiteSettings`
--
ALTER TABLE `SiteSettings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `SiteSettings`
--
ALTER TABLE `SiteSettings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
