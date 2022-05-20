-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2022 at 02:30 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `trashes`
--

CREATE TABLE `trashes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `table_name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trashes`
--

INSERT INTO `trashes` (`id`, `user_id`, `table_id`, `table_name`, `type`, `name`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 9, 'Vendor', 'vendor', 'Ila Laxma', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(2, NULL, 5, 'User', 'user', 'Laxman Mishra', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(3, NULL, 55, 'Vendor', 'vendor', 'Faith', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(4, NULL, 46, 'Vendor', 'vendor', 'Craig', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(5, NULL, 8, 'User', 'user', 'Krishna Mishra', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(6, NULL, 9, 'User', 'user', 'Krishna Mishra', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(7, NULL, 10, 'User', 'user', 'Krishna Mishra', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(8, NULL, 20, 'User', 'user', 'test 1 ', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(9, NULL, 24, 'User', 'user', 'erwer ', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(10, NULL, 1, 'Category', 'category', 'Bracelets', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(11, NULL, 2, 'Category', 'category', 'Sunglasses', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(12, NULL, 4, 'Category', 'category', 'krishna', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(13, NULL, 5, 'Category', 'category', 'watches', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(14, NULL, 6, 'Category', 'category', 'Bags', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(15, NULL, 7, 'Category', 'category', 'Chains', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(16, NULL, 8, 'Category', 'category', 'Bevrages', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(17, NULL, 9, 'Category', 'category', ' Bevrages2,', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(18, NULL, 10, 'Category', 'category', 'krishna', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(19, NULL, 11, 'Category', 'category', 'Bevrages7', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(20, NULL, 20, 'Category', 'category', 'test Category', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(21, NULL, 22, 'Category', 'category', 'Tea', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(22, NULL, 23, 'Category', 'category', 'hotels', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(23, NULL, 30, 'Category', 'category', 'Venom', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(24, NULL, 31, 'Category', 'category', 'MSK', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(25, NULL, 32, 'Category', 'category', 'Indian', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(26, NULL, 33, 'Category', 'category', 'Chinese', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(27, NULL, 36, 'Category', 'category', 'Afghani food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(28, NULL, 37, 'Category', 'category', 'Albania Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(29, NULL, 41, 'Category', 'category', 'Brazilian Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(30, NULL, 42, 'Category', 'category', 'Mexican Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(31, NULL, 43, 'Category', 'category', 'Italian Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(32, NULL, 47, 'Category', 'category', 'Bangladesh Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(33, NULL, 49, 'Category', 'category', 'Columbian Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(34, NULL, 50, 'Category', 'category', 'Turkish Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(35, NULL, 51, 'Category', 'category', 'Hispanic Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(36, NULL, 52, 'Category', 'category', 'Greek Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(37, NULL, 53, 'Category', 'category', 'Irish Food', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(38, NULL, 93, 'Category', 'category', 'Buy and Sell Me', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(39, NULL, 94, 'Category', 'category', 'Test 1 Category', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(40, NULL, 95, 'Category', 'category', 'tetstsst', '2022-05-20 04:56:58', '2022-05-20 04:56:58'),
(41, NULL, 3, 'Contact Enquiry', 'ContactInquiry', 'Oren Levy', '2022-05-20 04:56:58', '2022-05-20 04:56:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trashes`
--
ALTER TABLE `trashes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trashes`
--
ALTER TABLE `trashes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
