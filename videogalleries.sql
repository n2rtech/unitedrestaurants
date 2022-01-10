-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 01:21 PM
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
-- Table structure for table `videogalleries`
--

CREATE TABLE `videogalleries` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `video_name` varchar(255) DEFAULT NULL,
  `youtube_link` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `videogalleries`
--

INSERT INTO `videogalleries` (`id`, `user_id`, `video_name`, `youtube_link`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'admin', 'Admin Application', NULL, '2021-11-25 11:30:35', '2021-11-25 11:52:27'),
(3, 2, 'sub user1', 'sub admin users', NULL, '2021-11-25 11:40:22', '2021-11-25 11:40:22'),
(4, 3, 'sub user3', 'sub admin users', NULL, '2021-11-25 11:40:30', '2021-11-25 11:40:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `videogalleries`
--
ALTER TABLE `videogalleries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `videogalleries`
--
ALTER TABLE `videogalleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
