-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2021 at 01:44 PM
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
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(151) NOT NULL,
  `description` text,
  `slug` varchar(151) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image` text,
  `sort_order` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `slug`, `parent_id`, `category_id`, `image`, `sort_order`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Bracelets', 'Bracelets', NULL, 0, NULL, '', 1, 1, '2021-11-15 07:41:01', '2021-11-15 07:41:01'),
(4, 'krishna', 'Krishna Mishra', NULL, 0, NULL, 'image_1637739295874.jpg', 1, 1, '2021-11-15 07:46:54', '2021-11-24 07:34:55'),
(5, 'watches', 'watches', NULL, 1, NULL, 'image_1638448695775.jpg', 1, 1, '2021-11-15 07:47:27', '2021-12-02 12:38:15'),
(6, 'Bags', 'Bags', NULL, 4, NULL, '', 1, 1, '2021-11-15 07:48:36', '2021-11-15 07:48:36'),
(7, 'Chains', 'Chains', NULL, 6, NULL, '', 1, 1, '2021-11-15 07:49:09', '2021-11-15 07:49:09'),
(8, 'Bevrages', 'Bevrages', NULL, 5, NULL, '', 1, 1, '2021-11-15 07:49:30', '2021-11-15 07:49:30'),
(9, ' Bevrages2', ' Bevrages1,', NULL, 5, NULL, ',', 1, 1, '2021-11-15 11:58:26', '2021-11-15 11:58:26'),
(10, 'krishna', 'krishna', NULL, 7, NULL, 'image_1638448793721.jpg', 1, 1, '2021-11-16 09:56:48', '2021-12-02 12:39:53'),
(11, 'Bevrages7', 'Bevrages6', NULL, 7, NULL, 'image_1637057493463.jpg', 1, 1, '2021-11-16 10:11:33', '2021-11-16 10:11:33'),
(18, 'Bevrages711', 'Bevrages6', NULL, 7, NULL, 'image_1637737637873.jpg', 1, 1, '2021-11-24 07:07:17', '2021-11-24 07:07:17'),
(22, 'Bevrages3', 'Bevrages1', NULL, 4, NULL, NULL, 1, 1, '2021-12-02 09:24:40', '2021-12-02 09:24:40'),
(25, 'Components', 'Components', NULL, 0, NULL, 'image_1638439787903.jpg', NULL, 0, '2021-12-02 10:09:47', '2021-12-02 10:09:47'),
(26, 'Monitors ', 'Monitors ', NULL, 25, NULL, 'image_1638439854196.jpg', NULL, 0, '2021-12-02 10:10:54', '2021-12-02 10:10:54'),
(27, 'dekstop', 'dekstop', NULL, 26, NULL, 'image_1638440053618.jpg', NULL, 0, '2021-12-02 10:14:13', '2021-12-02 10:14:13'),
(28, 'keybord', 'keybord', NULL, 27, NULL, 'image_1638440096162.jpg', NULL, 0, '2021-12-02 10:14:56', '2021-12-02 10:14:56'),
(29, 'Restaurants', 'Restaurants', NULL, 0, NULL, 'image_1638514379484.jpg', NULL, 0, '2021-12-03 06:52:59', '2021-12-03 06:52:59'),
(30, '3 Star', '3 Star', NULL, 29, NULL, 'image_1638514424081.jpg', NULL, 0, '2021-12-03 06:53:44', '2021-12-03 06:53:44'),
(31, '5 Star', '5 Star', NULL, 29, NULL, 'image_1638514436164.jpg', NULL, 0, '2021-12-03 06:53:56', '2021-12-03 06:53:56'),
(32, '7 Star', '7 Star', NULL, 29, NULL, 'image_1638514458598.jpg', NULL, 0, '2021-12-03 06:54:18', '2021-12-03 06:54:18'),
(33, 'Indian', 'Indian', NULL, 30, NULL, 'image_1638514504194.jpg', NULL, 0, '2021-12-03 06:55:04', '2021-12-03 06:55:04'),
(34, 'Italian', 'Italian', NULL, 33, NULL, 'image_1638514546820.jpg', NULL, 0, '2021-12-03 06:55:46', '2021-12-03 06:55:46'),
(35, 'Chinese', 'Chinese', NULL, 33, NULL, 'image_1638514569992.jpg', NULL, 0, '2021-12-03 06:56:10', '2021-12-03 06:56:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
