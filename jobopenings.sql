-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 07:49 AM
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
-- Table structure for table `jobopenings`
--

CREATE TABLE `jobopenings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `job_name` varchar(255) DEFAULT NULL,
  `job_description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobopenings`
--

INSERT INTO `jobopenings` (`id`, `user_id`, `job_name`, `job_description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'admin', 'Admin Application1', NULL, '2021-11-25 06:20:13', '2021-11-25 06:42:02'),
(3, 2, 'sub user', 'sub admin users', NULL, '2021-11-25 06:41:03', '2021-11-25 06:41:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobopenings`
--
ALTER TABLE `jobopenings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobopenings`
--
ALTER TABLE `jobopenings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
