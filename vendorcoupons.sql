-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2021 at 06:30 AM
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
-- Table structure for table `vendorcoupons`
--

CREATE TABLE `vendorcoupons` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deal_name` varchar(255) DEFAULT NULL,
  `deal_description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorcoupons`
--

INSERT INTO `vendorcoupons` (`id`, `user_id`, `deal_name`, `deal_description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'sub user', 'sub admin users', NULL, '2021-11-26 09:03:21', '2021-11-26 09:03:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendorcoupons`
--
ALTER TABLE `vendorcoupons`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vendorcoupons`
--
ALTER TABLE `vendorcoupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
