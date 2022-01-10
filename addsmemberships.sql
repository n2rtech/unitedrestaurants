-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2021 at 01:39 PM
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
-- Database: `mernunited`
--

-- --------------------------------------------------------

--
-- Table structure for table `addsmemberships`
--

CREATE TABLE `addsmemberships` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `slug` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `interval` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addsmemberships`
--

INSERT INTO `addsmemberships` (`id`, `user_id`, `name`, `description`, `slug`, `price`, `interval`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Bronze', 'Your ad will appear in all sections you are listed in in the country your business resides.', 'bronze', 4.99, 'monthly', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 'Silver', 'All what is included in Bronze package + Your ad will appear on homepage', 'silver', 6.99, 'monthly', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Gold', 'All what is included in Bronze and Silver package + Your ad will appear on homepage, every departments all over worldwide', 'gold', 9.99, 'monthly', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addsmemberships`
--
ALTER TABLE `addsmemberships`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addsmemberships`
--
ALTER TABLE `addsmemberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
