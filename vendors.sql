-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 10:51 AM
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
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(14) DEFAULT NULL,
  `address` text,
  `password` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `subscription_plan` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `membership_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `name`, `email`, `mobile`, `address`, `password`, `country_id`, `category_id`, `country`, `department`, `subscription_plan`, `status`, `membership_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Krishna Mishra', 'krishna34@gmail.com', 'dd', 'dd', '$2a$10$IDreqkicRs4BH/vC.5mgIu7O9UvaeUlLl3DSMVJWolcjDSaaKTlqG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-25 09:30:16', '2021-11-25 09:30:16'),
(2, 'Krishna Mishra', 'krishna1@gmail.com', 'dd', 'dd', '$2a$10$YsgTqlhEiBLifEhSH8JvruclDxNhHnHpI7h3kKsT.TLCuuklVpsaa', 3, 3, NULL, NULL, NULL, NULL, NULL, '2021-11-25 09:32:10', '2021-11-25 09:32:10'),
(3, 'Krishna Mishra', 'krishna14@gmail.com', 'dd', 'dd', '$2a$10$VM15vS82yX5E6VV7K8/DvefqPHZTkbgAGcCaJLrBVJc9A30Xk.l3i', 3, 3, NULL, NULL, NULL, NULL, NULL, '2021-11-25 09:36:43', '2021-11-25 09:36:43'),
(4, 'Krishna Mishra', 'krishna143@gmail.com', 'dd', 'dd', '$2a$10$.mhh1axeEUvdjPyWpCaMXuhT6dRneZwGptkn2U.7fPZ.2YvlWkAeG', 3, 3, NULL, NULL, NULL, NULL, NULL, '2021-11-25 09:48:02', '2021-11-25 09:48:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
