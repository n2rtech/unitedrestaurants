-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2021 at 10:54 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mernunited_old`
--

-- --------------------------------------------------------

--
-- Table structure for table `sitesettings`
--

CREATE TABLE `sitesettings` (
  `id` int(11) NOT NULL,
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
-- Dumping data for table `sitesettings`
--

INSERT INTO `sitesettings` (`id`, `maintenance_mode`, `site_name`, `phone_number`, `address`, `facebook_links`, `twitter_links`, `google_plus_links`, `linkedin_links`, `instagram_links`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, ' no', ' United Restaurants', ' 9026574061', ' sss', ' ', ' ', ' ff', ' ss', ' kk', 'logo_1638348925122.jpg', '2021-11-29 13:37:30', '2021-12-01 08:55:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sitesettings`
--
ALTER TABLE `sitesettings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sitesettings`
--
ALTER TABLE `sitesettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
