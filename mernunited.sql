-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2021 at 03:19 PM
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
-- Table structure for table `accountspayables`
--

CREATE TABLE `accountspayables` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountspayables`
--

INSERT INTO `accountspayables` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(2, 'sub user', 'sub admin users', '2021-12-01 09:39:22', '2021-12-01 09:39:22');

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

-- --------------------------------------------------------

--
-- Table structure for table `adspaces`
--

CREATE TABLE `adspaces` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adspaces`
--

INSERT INTO `adspaces` (`id`, `user_id`, `link`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'link', 'image_1638173962544.png', '2021-11-29 08:19:22', '2021-11-29 08:19:22'),
(4, 1, '', 'image_1638364475438.jpg', '2021-12-01 13:14:35', '2021-12-01 13:14:35'),
(5, 1, '', 'image_1638364700330.jpg', '2021-12-01 13:18:20', '2021-12-01 13:18:20'),
(6, 35, '', 'image_1639377736645.png', '2021-12-13 06:42:16', '2021-12-13 06:42:16');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `show_on_home` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `show_on_home`, `name`, `content`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'LOREM IPSUM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....', 'image_1638855297760.jpg', '2021-12-06 12:22:51', '2021-12-07 05:34:57'),
(2, 1, 'LOREM IPSUM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....', 'image_1638855313110.jpg', '2021-12-06 12:31:22', '2021-12-07 05:35:13'),
(3, 1, 'LOREM IPSUM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....', 'image_1638855317894.jpg', '2021-12-06 12:33:08', '2021-12-07 05:35:17'),
(4, 1, 'LOREM IPSUM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata', 'image_1638853752121.jpg', '2021-12-06 12:51:16', '2021-12-07 05:09:12'),
(5, 1, 'LOREM IPSUM', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....', 'image_1638859076438.jpg', '2021-12-06 12:52:30', '2021-12-07 06:37:56');

-- --------------------------------------------------------

--
-- Table structure for table `businessadvertises`
--

CREATE TABLE `businessadvertises` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `businessadvertises`
--

INSERT INTO `businessadvertises` (`id`, `user_id`, `country_id`, `business_name`, `country`, `about_business`, `categories`, `banner`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 23, 3, 'Oscar', 'uk', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029764978.jpg', NULL, '2021-12-09 11:32:13', '2021-12-09 06:02:45'),
(2, 26, 3, 'Oscar', 'uk', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029760254.jpg', NULL, '2021-12-09 11:32:18', '2021-12-09 06:02:40'),
(4, 27, 3, 'komal@gmail.com', 'uk', '', NULL, 'banner_1639029756340.jpg', NULL, '2021-12-10 13:28:47', '0000-00-00 00:00:00');

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
(35, 'Chinese', 'Chinese', NULL, 33, NULL, 'image_1638514569992.jpg', NULL, 0, '2021-12-03 06:56:10', '2021-12-03 06:56:10'),
(36, '7 star Res ', 'Bevrages1', NULL, 32, NULL, 'image_1639135149428.jpg', 1, 1, '2021-12-10 11:19:09', '2021-12-10 11:19:09'),
(37, '71 star Res ', 'Bevrages1', NULL, 36, NULL, '', 1, 1, '2021-12-10 11:22:42', '2021-12-10 11:22:42');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(121) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'United States of America', 'usa', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Canada', 'can', NULL, '2021-11-22 09:11:11', '2021-12-01 08:17:53'),
(3, 'United Kingdom', 'uk', NULL, '2021-11-22 09:11:04', '2021-12-01 08:17:41'),
(4, 'Italy', 'ita', NULL, '2021-11-22 09:11:20', '2021-12-01 08:18:04'),
(5, 'Australia', 'au', NULL, '2021-11-22 09:08:09', '2021-12-01 08:17:11'),
(6, 'Spain', 'esp', NULL, '2021-11-22 09:11:28', '2021-12-01 08:18:20');

-- --------------------------------------------------------

--
-- Table structure for table `couponcategories`
--

CREATE TABLE `couponcategories` (
  `id` int(11) NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `couponcategories`
--

INSERT INTO `couponcategories` (`id`, `coupon_id`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discount` double(10,2) DEFAULT NULL,
  `type` varchar(151) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `uses_total` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `name`, `code`, `discount`, `type`, `total`, `date_start`, `date_end`, `uses_total`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'sFree Shippingtaff', 'SHIP008', 10.00, 'P', '10.00', '2021-11-16', '2021-11-16', NULL, 1, '2021-11-18 06:51:02', '2021-11-18 06:51:02'),
(2, 'sFree Shippingtaff', 'SHIP008', 10.00, 'P', '10.00', '2021-11-14', '2021-11-18', NULL, 1, '2021-11-18 06:52:18', '2021-11-18 06:52:18'),
(3, 'sFree Shippingtaff', 'SHIP008', 10.00, 'P', '10.00', '2021-11-15', '2021-11-19', NULL, 1, '2021-11-18 06:53:19', '2021-11-18 06:53:19'),
(4, 'sFree Shippingtaff', 'SHIP008', 10.30, 'P', '10.50', '2021-11-15', '2021-11-19', NULL, 1, '2021-11-18 06:53:56', '2021-11-18 06:53:56'),
(5, 'sFree Shippingtaff', 'SHIP008', 10.30, 'P', '10.50', '2021-11-15', '2021-11-19', NULL, 0, '2021-11-18 06:54:10', '2021-11-18 06:54:10'),
(6, 'sFree Shippingtaff', 'SHIP008', 10.30, 'P', '10.50', '2021-11-15', '2021-11-19', 0, 0, '2021-11-18 06:55:32', '2021-11-18 06:55:32');

-- --------------------------------------------------------

--
-- Table structure for table `couponusers`
--

CREATE TABLE `couponusers` (
  `id` int(11) NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `couponusers`
--

INSERT INTO `couponusers` (`id`, `coupon_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-11-18 00:00:00', '2021-11-18 00:00:00'),
(2, 2, 1, '2021-11-18 00:00:00', '2021-11-18 00:00:00'),
(3, 1, 2, '2021-11-18 00:00:00', '2021-11-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `featuredbusinesses`
--

CREATE TABLE `featuredbusinesses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `featuredbusinesses`
--

INSERT INTO `featuredbusinesses` (`id`, `user_id`, `country_id`, `country`, `business_name`, `about_business`, `categories`, `banner`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(9, 23, 3, 'uk', 'Oscar', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029764978.jpg', NULL, '2021-12-09 11:32:13', '2021-12-09 06:02:45'),
(10, 26, 3, 'uk', 'Oscar', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029760254.jpg', NULL, '2021-12-09 11:32:18', '2021-12-09 06:02:40'),
(12, 27, 3, 'uk', 'komal@gmail.com', '', NULL, 'banner_1639029756340.jpg', NULL, '2021-12-10 13:28:47', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `user_id`, `image`, `createdAt`, `updatedAt`) VALUES
(3, 2, 'image_1637849145012.jpg', '2021-11-25 14:05:45', '2021-11-25 14:05:45'),
(4, 2, 'image_1637933112772.png', '2021-11-26 13:25:12', '2021-11-26 13:25:12'),
(5, 2, 'image_1637933112783.JPG', '2021-11-26 13:25:12', '2021-11-26 13:25:12'),
(6, 2, 'image_1637933113498.jpg', '2021-11-26 13:25:13', '2021-11-26 13:25:13'),
(7, 4, 'image_1637934454644.png', '2021-11-26 13:47:34', '2021-11-26 13:47:34'),
(8, 4, 'image_1637934454652.png', '2021-11-26 13:47:34', '2021-11-26 13:47:34'),
(9, 4, 'image_1637934528102.png', '2021-11-26 13:48:48', '2021-11-26 13:48:48'),
(10, 4, 'image_1637934528112.png', '2021-11-26 13:48:48', '2021-11-26 13:48:48'),
(11, 4, 'image_1637934598513.png', '2021-11-26 13:49:58', '2021-11-26 13:49:58'),
(12, 4, 'image_1637934598516.png', '2021-11-26 13:49:58', '2021-11-26 13:49:58'),
(13, 4, 'image_1637934672665.png', '2021-11-26 13:51:12', '2021-11-26 13:51:12'),
(14, 4, 'image_1637934672672.png', '2021-11-26 13:51:12', '2021-11-26 13:51:12'),
(15, 4, 'image_1637934724337.png', '2021-11-26 13:52:04', '2021-11-26 13:52:04'),
(16, 4, 'image_1637934724351.jpg', '2021-11-26 13:52:04', '2021-11-26 13:52:04'),
(18, 29, 'image_1639126029766.png', '2021-12-10 08:47:09', '2021-12-10 08:47:09'),
(19, 29, 'image_1639126053118.png', '2021-12-10 08:47:33', '2021-12-10 08:47:33'),
(20, 35, 'image_1639377637074.png', '2021-12-13 06:40:37', '2021-12-13 06:40:37'),
(21, 36, 'image_1639386456836.png', '2021-12-13 09:07:36', '2021-12-13 09:07:36');

-- --------------------------------------------------------

--
-- Table structure for table `hotdeals`
--

CREATE TABLE `hotdeals` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotdeals`
--

INSERT INTO `hotdeals` (`id`, `user_id`, `country_id`, `country`, `business_name`, `about_business`, `categories`, `banner`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(9, 23, 3, 'uk', 'Oscar', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029764978.jpg', NULL, '2021-12-09 11:32:13', '2021-12-09 06:02:45'),
(10, 26, 3, 'uk', 'Oscar', 'laxman Mishra', '[\"1\",\"3\"]', 'banner_1639029760254.jpg', NULL, '2021-12-09 11:32:18', '2021-12-09 06:02:40'),
(12, 27, 3, 'uk', 'komal@gmail.com', '', '[\"1\",\"4\"]', 'banner_1639029756340.jpg', NULL, '2021-12-10 13:28:47', '0000-00-00 00:00:00');

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
(1, NULL, 'admin', 'Admin Application', NULL, '2021-11-25 06:20:13', '2021-11-25 11:17:19'),
(3, 2, 'sub user', 'sub admin users', NULL, '2021-11-25 06:41:03', '2021-11-25 06:41:03'),
(4, 5, 'krishna', 'Mishra1', NULL, '2021-11-25 11:18:23', '2021-11-25 11:18:55'),
(5, 2, 'sub user', 'sub admin users', NULL, '2021-11-25 11:55:39', '2021-11-25 11:55:39'),
(6, 3, 'sub user', 'sub admin users', NULL, '2021-11-25 11:55:54', '2021-11-25 11:55:54'),
(7, NULL, 'laxman', 'msihara', NULL, '2021-11-26 06:54:23', '2021-11-26 06:54:23'),
(8, 5, 'dddd', 'ffffffffff', NULL, '2021-11-26 08:04:55', '2021-11-26 08:04:55'),
(9, 29, 'Et soluta illum qua', 'Et porro ipsam est i55', NULL, '2021-12-10 08:54:12', '2021-12-10 08:54:47');

-- --------------------------------------------------------

--
-- Table structure for table `latestadditions`
--

CREATE TABLE `latestadditions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `memberships`
--

CREATE TABLE `memberships` (
  `id` int(11) NOT NULL,
  `product` varchar(255) DEFAULT NULL,
  `plan_id` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `slug` varchar(255) DEFAULT NULL,
  `interval` varchar(255) DEFAULT NULL,
  `price` decimal(10,4) DEFAULT NULL,
  `expired_on` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `memberships`
--

INSERT INTO `memberships` (`id`, `product`, `plan_id`, `status`, `name`, `description`, `slug`, `interval`, `price`, `expired_on`, `createdAt`, `updatedAt`) VALUES
(1, '', '', 1, 'Free', 'This is Free Plan', '', 'Monthly', '0.0000', '2018-01-19 13:15:00', '2021-11-18 11:14:33', '2021-11-18 11:14:33'),
(2, 'PROD-65837101F20834018', 'P-9S8026110V486523FMGW5QYA', 1, 'Standard', 'This is a standard plan', NULL, 'Monthly', '5.9900', NULL, '2021-11-25 00:00:00', '2021-11-25 00:00:00'),
(3, 'PROD-65837101F20834018', 'P-80C20774VE912812AMGW5UAY', 1, 'Premium', 'This is a premium plan', NULL, 'Monthly', '7.9900', NULL, '2021-11-25 00:00:00', '2021-11-25 00:00:00'),
(4, 'PROD-65837101F20834018', 'P-60508956GS002480AMGW3GVA', 1, 'Standard', 'Standard Quarterly', NULL, 'Quarterly', '16.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00'),
(5, 'PROD-65837101F20834018', 'P-72X339748W160990GMGW5TEI', 1, 'Standard', 'Standard Half Yearly Plan', NULL, 'HalfYearly', '30.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00'),
(6, 'PROD-65837101F20834018', 'P-6D395430J6272650NMGW5VLA', 1, 'Standard', 'Standard Yearly Plan', NULL, 'Yearly', '65.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00'),
(7, 'PROD-65837101F20834018', 'P-3SH91639SS050050TMGW5UYQ', 1, 'Premium', 'Premium Quarterly Plan', NULL, 'Quarterly', '29.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00'),
(8, 'PROD-65837101F20834018', 'P-36Y75748CP963445RMGW5WHA', 1, 'Premium', 'Premium Half yearly Plan', NULL, 'HalfYearly', '43.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00'),
(9, 'PROD-65837101F20834018', 'P-1BR04865BX6773455MGW5XKI', 1, 'Premium', 'Premium Yearly Plan', NULL, 'Yearly', '90.0000', NULL, '2021-12-01 00:00:00', '2021-12-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `menuitems`
--

CREATE TABLE `menuitems` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menuitems`
--

INSERT INTO `menuitems` (`id`, `user_id`, `name`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, 'dd', '0000-00-00 00:00:00', '2021-12-02 14:01:14'),
(2, 29, '', '<p>ddlllll tttt</p>\n', '2021-12-10 07:07:04', '2021-12-10 07:08:29'),
(3, 35, '', '', '2021-12-13 06:46:35', '2021-12-13 06:46:35');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `body` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `slug`, `body`, `createdAt`, `updatedAt`) VALUES
(1, 'ABOUT US', 'about-us', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit businessqq.</p>\n\n<p>About Us</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:04:54'),
(2, 'Contact Us', 'contact-us', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>Contact Us</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:05:14'),
(3, 'CUSTOMER SERVICES', 'customer-services', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>CUSTOMER SERVICES</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:05:31'),
(4, 'TECHNICAL SUPPORT', 'technical-support', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>TECHNICAL SUPPORT</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:05:44'),
(5, 'SALES', 'sales', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>SALES</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:06:00'),
(6, 'PRIVACY POLICY', 'privacy-policy', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>PRIVACY POLICY</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:06:41'),
(7, 'Return Policy', 'return-policy', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>Return Policy</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:06:49'),
(8, 'Terms Of Service', 'terms-of-service', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>Terms Of Service</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:06:57'),
(9, 'How It Work', 'how-it-work', '<p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>\n\n<p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>\n\n<p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>\n\n<p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>\n\n<p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>\n\n<p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>\n\n<p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company&#39;s site, so their customers are still able to order from there.</p>\n\n<p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>\n\n<p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>\n\n<p>-Lunch Bux it is more of a message than a for profit business.</p>\n\n<p>How It Work</p>\n', '2021-11-18 12:59:06', '2021-12-03 06:06:32');

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `card_number` varchar(255) DEFAULT NULL,
  `name_on_card` varchar(255) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentmethods`
--

INSERT INTO `paymentmethods` (`id`, `user_id`, `card_number`, `name_on_card`, `expiry_date`, `cvv`, `createdAt`, `updatedAt`) VALUES
(1, 1, '1234655LHH3', 'Krishna Mishra', '2024-08-08', NULL, '0000-00-00 00:00:00', '2021-11-29 07:25:01'),
(2, 29, 'dd', 'fff', NULL, NULL, '2021-12-10 08:19:39', '2021-12-10 08:40:17'),
(3, 27, '', '', '0000-00-00', 0, '2021-12-10 08:21:21', '2021-12-10 08:21:21'),
(4, 35, '', '', '0000-00-00', 0, '2021-12-13 06:46:55', '2021-12-13 06:46:55');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `perm_name` varchar(255) NOT NULL,
  `perm_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'Roles & Permission', 'Admin Roles & Permission', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Manage Pages', 'Manage Pages', '2021-11-24 06:51:15', '2021-11-24 06:51:15'),
(3, 'Categories', 'Categories', '2021-11-24 06:51:45', '2021-11-24 06:51:45'),
(4, 'Vendors', 'Vendors', '2021-11-24 06:52:18', '2021-11-24 06:52:18'),
(5, 'Membership packages', 'Membership packages', '2021-11-24 06:52:35', '2021-11-24 06:52:35'),
(6, 'Notifications & messaging', 'Notifications & messaging', '2021-11-24 06:52:56', '2021-11-24 06:52:56'),
(7, 'Promotions/discounts', 'Promotions/discounts', '2021-11-24 06:53:17', '2021-11-24 06:53:17'),
(8, 'Accounts Payable', 'Accounts Payable', '2021-11-24 06:53:43', '2021-11-24 06:53:43'),
(9, 'Countries', 'Countries', '2021-11-24 06:54:02', '2021-11-24 06:54:02'),
(10, 'Google Adsense', 'Google Adsense', '2021-11-24 06:54:18', '2021-11-24 06:54:18'),
(11, 'Site settings', 'Site settings', '2021-11-24 06:54:40', '2021-11-24 06:54:40'),
(12, 'Business Profile', 'Business Profile', '2021-11-24 06:55:35', '2021-11-24 06:55:35'),
(13, 'My Wallet', 'My Wallet', '2021-11-24 06:55:51', '2021-11-24 06:55:51'),
(14, 'Payment Method', 'Payment Method', '2021-11-24 06:56:14', '2021-11-24 06:56:14'),
(15, 'Deals (Coupons)', 'Deals (Coupons)', '2021-11-24 06:56:28', '2021-11-24 06:56:28'),
(16, 'Photo Gallery', 'Photo Gallery', '2021-11-24 06:56:45', '2021-11-24 06:56:45'),
(17, 'Videos', 'Videos', '2021-11-24 06:57:05', '2021-11-24 06:57:05'),
(18, 'Job Openings', 'Job Openings', '2021-11-24 06:57:17', '2021-11-24 06:57:17'),
(19, 'Advertisement', 'Advertisement', '2021-11-24 06:57:42', '2021-11-24 06:57:42'),
(20, 'Dashboard', 'Dashboard', '2021-11-24 06:58:06', '2021-11-24 06:58:06');

-- --------------------------------------------------------

--
-- Table structure for table `profilecategories`
--

CREATE TABLE `profilecategories` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `banner` varchar(151) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `business_name`, `business_email`, `manager_name`, `manager_email`, `phone_number`, `fax`, `address`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Samuel Mis', 'zolytuxywi@mailinator.com', 'Samuel Mis', 'zolytuxywi@mailinator.com', 'undefined', 'null', 'Non sed et aliquip r', 'string', 'banner_1637927622677.png', 'null', 'null', 'eee', 'ddjjdjdjd', '2021-11-24 08:20:23', '2021-12-08 14:57:02'),
(4, 4, 'Krishna Mishra', 'krishna143@gmail.com', 'Krishna Mishra', 'krishna143@gmail.com', '77777777', 'fddddddddddd', 'nulffffff', NULL, 'banner_1637929555970.png', 'null', 'null', 'null', 'null', '2021-11-26 11:43:58', '2021-11-26 12:25:55'),
(5, 1, 'Krishna Mishra', 'krishna34@gmail.com', 'Krishna Mishra', 'krishna34@gmail.com', 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 06:35:09', '2021-11-29 06:35:09'),
(6, 23, 'Harriet', 'wekex@mailinator.com', 'Harriet', 'wekex@mailinator.com', '98', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-07 10:32:16', '2021-12-07 10:32:16'),
(7, 25, 'MacKenzie Kala', 'niha@mailinator.com', 'MacKenzie Kala', 'niha@mailinator.com', '60', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-07 12:38:36', '2021-12-07 12:38:36'),
(8, 2, 'Krishna Mishra', 'krishna1@gmail.com', 'Krishna Mishra', 'krishna1@gmail.com', 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-07 12:41:24', '2021-12-07 12:41:24'),
(9, 2, 'Krishna Mishra', 'krishna1@gmail.com', 'Krishna Mishra', 'krishna1@gmail.com', 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-10 11:46:02', '2021-12-10 11:46:02');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `perm_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rolepermissions`
--

INSERT INTO `rolepermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 3, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(3, 1, 2, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(4, 1, 10, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(5, 1, 8, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(6, 1, 5, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(7, 1, 7, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(8, 1, 6, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(9, 1, 4, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(10, 1, 11, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(11, 1, 9, '2021-11-24 06:59:16', '2021-11-24 06:59:16'),
(13, 2, 12, '2021-11-24 08:04:29', '2021-11-24 08:04:29');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `role_id`, `role_description`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 0, 'admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'vendor', 0, 'vendor', '2021-11-24 00:00:00', '2021-11-24 00:00:00'),
(3, 'seratory', 0, 'seratory', '2021-11-12 08:01:30', '2021-11-12 08:01:30'),
(4, 'staff', 0, 'Staff', '2021-11-12 12:31:12', '2021-11-12 12:31:12'),
(5, 'sub user', 0, 'sub admin users', '2021-11-18 10:50:28', '2021-11-18 10:50:28'),
(6, 'customer', 0, 'customer', '2021-11-12 08:35:09', '2021-11-12 08:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `saleitems`
--

CREATE TABLE `saleitems` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `saleitems`
--

INSERT INTO `saleitems` (`id`, `user_id`, `name`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'dd', '<p><strong>laxmamama <em>Krishna</em></strong></p>\n', '0000-00-00 00:00:00', '2021-12-06 11:34:11'),
(2, 29, '', '<p>krishna mishra</p>\n', '2021-12-10 06:58:14', '2021-12-10 07:02:31');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211112064757-create-user.js'),
('20211112064758-create-role.js'),
('20211112064800-create-permission.js'),
('20211112064802-create-role-permission.js'),
('20211115055358-create-category.js'),
('20211116135225-create-membership.js'),
('20211117135307-create-coupon.js'),
('20211118051724-create-coupon-category.js'),
('20211118051731-create-coupon-user.js'),
('20211118115407-create-page.js'),
('20211122090051-create-country.js'),
('20211124075049-create-profile.js'),
('20211124092748-create-profile-category.js'),
('20211125050654-create-vendor.js'),
('20211125061100-create-job-opening.js'),
('20211125112234-create-video-gallery.js'),
('20211125123254-create-gallery.js'),
('20211126083444-create-vendor-coupon.js'),
('20211129055400-create-menu-item.js'),
('20211129064546-create-payment-method.js'),
('20211129075343-create-ad-space.js'),
('20211129114259-create-site-setting.js'),
('20211129122322-create-adds-membership.js'),
('20211201050055-create-vendor-membership.js'),
('20211201091813-create-accounts-payable.js'),
('20211202135153-create-sale-item.js'),
('20211206121337-create-blog.js'),
('20211207070556-create-vendor-usa.js'),
('20211207070628-create-vendor-can.js'),
('20211207070643-create-vendor-uk.js'),
('20211207070657-create-vendor-ita.js'),
('20211207070719-create-vendor-au.js'),
('20211207070737-create-vendor-esp.js'),
('20211207071652-create-hot-deal.js'),
('20211207071750-create-featured-business.js'),
('20211207071838-create-latest-addition.js'),
('20211207072001-create-business-advertise.js'),
('20211213094055-create-transaction.js');

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

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `comment` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `transaction_id`, `amount`, `type`, `comment`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'sdsdfjsd2323', 100, 'deposit', 'Added to wallet', '2021-12-13 09:59:39', '2021-12-13 09:59:39'),
(3, 3, 'sdsdfjsd2323', 100, 'deposit', 'Added to wallet', '2021-12-13 10:00:15', '2021-12-13 10:00:15'),
(4, 3, 'sdsdfjsd2323', 100.55, 'deposit', 'Added to wallet', '2021-12-13 10:00:51', '2021-12-13 10:00:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `role` varchar(151) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `business_type` varchar(151) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(151) DEFAULT NULL,
  `address` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `category_id`, `country_id`, `role`, `email`, `password`, `name`, `business_type`, `phone`, `mobile`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, NULL, 'admin', 'krishna@gmail.com', '$2a$10$xK/80r6a.M7YQ8b0QndXhutktRT59DEXE09VkDSUpiDuHPdYo5FLC', 'Krishna Mishra', NULL, '9026574061', '9026574061', 'test addess', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, NULL, NULL, 'vendor', 'laxman@gmail.com', '$2a$10$lbKBJSi7KQk5gVB0cayE1O/xwpL4kLf4G/HcAGkYLKT5NoA0Jt/VG', 'Laxman Mishra', NULL, '9454045599', '9454045599', 'test address', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, NULL, NULL, NULL, 'laxmanbbk@gmail.com', '$2a$10$sN3FTdd3Fra30tqsUP5iU..eK06TRkKsEsE/rz7XRl/X2Xmj9dwlm', 'Laxman Mishra', NULL, NULL, NULL, 'test address', '2021-11-12 09:54:35', '2021-11-12 09:54:35'),
(4, 3, NULL, NULL, NULL, 'didin@djamware.com', '$2a$10$yhuWdDz8YRqvAgKW7o7JxeS/6ABtol3m7N6wY3lEsI9ulvn2KvEmK', 'Laxman Mishra', NULL, '0998998998', '9454045599', 'test address', '2021-11-12 10:05:27', '2021-11-17 12:39:33'),
(5, 6, NULL, NULL, NULL, 'krishnabbk@gmail.com', '$2a$10$svzre/sSNH.3KrMt0jq8NueeLfRMTnaTkfgNBHQpsT06BiUJpHomu', 'Laxman Mishra', NULL, '9454045599', '9454045599', 'test address', '2021-11-12 10:08:13', '2021-11-12 10:08:13'),
(6, 5, NULL, NULL, NULL, 'revehakyz@mailinator.com', '$2a$10$B8Ixw95iPzNlTTaeTtwe2OJU5R/tJOF6Dnw2Fb./BOcOLZV8vZp/q', 'Karina Hunt', NULL, NULL, NULL, 'Aperiam illum labor', '2021-11-12 10:11:06', '2021-11-12 10:11:06'),
(7, 2, NULL, NULL, NULL, 'piresyruqe@mailinator.com', '$2a$10$1kzz9uajul/yfrFzYjSoJuqvlwnmvnU.A48x3ORUurLBHfn.0rkRK', 'Adena Holloway', NULL, NULL, NULL, 'Tempor consectetur r', '2021-11-12 13:40:38', '2021-11-12 13:40:38'),
(8, 2, NULL, NULL, NULL, 'nynilufim@mailinator.com', '$2a$10$o5K1urneLd2MzLgQ9zp.W.lD9Jyb6JzRMIOnefzIvPSnwvEzqKd9u', 'Anne William', NULL, NULL, NULL, 'Numquam sunt aut qu', '2021-11-16 12:12:20', '2021-11-16 12:12:20'),
(9, 2, NULL, NULL, NULL, 'merchant@gmail.com', '$2a$10$tj4nb2djQzI3WXT56/1hMe02kRqme7oUU.4g2ONpL1n0SBRg85gpa', 'Krishna Mishra', NULL, NULL, NULL, NULL, '2021-11-18 10:39:13', '2021-11-18 10:39:13'),
(10, 7, NULL, NULL, NULL, 'merchant1@gmail.com', '$2a$10$nONX6CQHc3QRvpt1yNUHBuFgc1j5kh7rsTzH2hrrmcIR/0y9aDE0e', 'Krishna Mishra', NULL, '9026574061', NULL, NULL, '2021-11-18 10:51:32', '2021-11-18 10:51:32'),
(11, 7, NULL, NULL, NULL, 'merchant2@gmail.com', '$2a$10$aXttmuYeCVJ3UI0XCdHp7OjWeUBfYGaw67BYc9Z3dYp6HmlyFp7J2', 'Krishna Mishra', NULL, '9026574061', '9026574061', NULL, '2021-11-18 10:53:24', '2021-11-18 10:53:24'),
(12, 7, NULL, NULL, NULL, 'merchant3@gmail.com', '$2a$10$kfnPGgliibtmqHprnSQ3Aebh2l9fx0mgC2DDJjOs.dBWos.inA3zO', 'Krishna Mishra', NULL, '9026574061', '9026574061', 'test 1 address', '2021-11-18 10:54:02', '2021-11-18 10:54:02'),
(13, 2, NULL, NULL, NULL, 'zozuc@mailinator.com', '$2a$10$JCz9FVy/fCSwmWgKq9MMje3H5lOyLk2/5OfRMo4hY8GmWCiQS9QqG', 'Charde Richards', NULL, NULL, NULL, 'Est quia saepe nisi ', '2021-11-22 06:38:36', '2021-11-22 06:38:36'),
(14, 2, NULL, NULL, NULL, 'jovocy@mailinator.com', '$2a$10$u37GGSw0mt//LIm9nyXuVu3oAsoHV5XpJ/A0/sVkKLWMVFF9ZeQMS', 'Jacob Sears', '', NULL, NULL, 'Odio magna qui conse', '2021-11-22 06:50:29', '2021-11-22 06:50:29'),
(15, 2, NULL, NULL, NULL, 'cugano@mailinator.com', '$2a$10$jqurPMvyqyJHTsFRknRhT.4iZKsvz.9h9.CX6WD1CaXDgkQfptYmq', 'Illana Rhodes', 'Suppliers', NULL, NULL, 'Cum enim unde enim i', '2021-11-22 06:51:33', '2021-11-22 06:51:33'),
(16, 2, 1, NULL, NULL, 'nydarin@mailinator.com', '$2a$10$q/h0XJ004R4SLmXCY8cEzuTxIUksj/27KfpkV4fL/MGHaQEfs0DH2', 'Cheyenne Rowe', NULL, NULL, NULL, 'Veniam quo nobis cu', '2021-11-22 08:23:33', '2021-11-22 08:23:33'),
(17, 2, 3, NULL, NULL, 'jarefiwoko@mailinator.com', '$2a$10$LaiKB0gIRot.GeT.74.L2u2B4gg2591wr.eOy1wgf8iYMOoci2992', 'Quin Barrera', NULL, NULL, NULL, 'Maiores voluptas sim', '2021-11-22 08:24:36', '2021-11-22 08:24:36'),
(18, 2, 3, 3, NULL, 'pyzob@mailinator.com', '$2a$10$jiZcr/Ae7htdNeoyZ4Qs2eZbe5hL7nxSunQV0ZOzVqVSQNQ./W7Ba', 'Abbot Maldonado', NULL, NULL, NULL, 'Maiores facere culpa', '2021-11-22 09:27:59', '2021-11-22 09:27:59'),
(19, 2, 1, 2, NULL, 'qonifixup@mailinator.com', '$2a$10$RJaff32OJkXkM.E1F9MO/ug9Pp3VHq51c4C.3DYQCvo58WzH0reM.', 'Kimberly Hayes', NULL, NULL, NULL, 'Fugit id repellendu', '2021-11-22 09:29:46', '2021-11-22 09:29:46'),
(20, 2, 1, 2, NULL, 'wesocimyx@mailinator.com', '$2a$10$R4IA2nu7flHCrJNXC.30SeH9vacHav0kbWKYWlPhGkaJTgYulBsdG', 'Anthony Acevedo', NULL, NULL, NULL, 'Corporis architecto ', '2021-11-23 08:17:39', '2021-11-23 08:17:39'),
(21, 2, 3, 2, NULL, 'tuwazy@mailinator.com', '$2a$10$7vjQBU.b7fYJIcy.vcDEduaALCeacI284wvsRPvXXTOHao4YVSbOq', 'Rosalyn Mcconnell', NULL, NULL, NULL, 'Quisquam sit aut ip', '2021-11-23 08:18:20', '2021-11-23 08:18:20'),
(22, 2, 4, 3, NULL, 'tafow@mailinator.com', '$2a$10$kKvZRqlZA3ne7Zf9dY/PnehRHjVOaThdSGaVIhz6KeIVg6KC/3ZjG', 'Iris Campbell', NULL, '75', '75', 'Rerum labore quas la', '2021-11-23 08:21:25', '2021-11-23 08:21:25'),
(23, 2, 3, 3, NULL, 'krishna14@gmail.com', '$2a$10$1U0gSBBwES0PoSBBQ3t0z.gk6woqOkUF8Y0agtW9ivBiY1Jl9/ifm', 'Krishna Mishra', NULL, 'dd', 'dd', 'dd', '2021-11-25 09:45:58', '2021-11-25 09:45:58'),
(24, 2, 3, 3, NULL, 'krishna143@gmail.com', '$2a$10$sdvchuXdx28dNPw76A5hM.jju4fFefeqdoPOGjpk6XQNP1p1xGEiG', 'Krishna Mishra', NULL, 'dd', 'dd', 'dd', '2021-11-25 09:46:42', '2021-11-25 09:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `vendoraus`
--

CREATE TABLE `vendoraus` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendoraus`
--

INSERT INTO `vendoraus` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 31, 'Kyla Ree', 'krishna mishra', 'soquha@mailinator.com', 'Kyla Ree', 'soquha@mailinator.com', 'Kyla Ree', 'soquha@mailinator.com', '93333333333', '93333333333', 'null', 'Reprehenderit excep', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fffffffffff', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-11 14:48:02', '2021-12-11 09:22:21'),
(2, 35, 'Whitney Talk', 'null', 'povovazuf@mailinator.com', 'Whitney Talk', 'povovazuf@mailinator.com', 'Whitney Talk', 'povovazuf@mailinator.com', '361222222', '361222222', 'null', 'Ratione eligendi iru', NULL, NULL, NULL, NULL, NULL, NULL, 'banner_1639375505655.png', 'null', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-13 11:34:24', '2021-12-13 06:05:05');

-- --------------------------------------------------------

--
-- Table structure for table `vendorcans`
--

CREATE TABLE `vendorcans` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorcans`
--

INSERT INTO `vendorcans` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 26, 'Oscar', 'laxman Mishra', 'wybaru@mailinator.com', 'Oscar', 'wybaru@mailinator.com', 'Samuel Mis', 'zolytuxywi@mailinator.com', '8188888888888', '816666666', 'null', 'In harum minima amet', NULL, NULL, NULL, NULL, NULL, '[\"1\",\"3\"]', 'banner_1639029699498.jpg', 'null', 'null', 'null', 'null', NULL, NULL, 0, NULL, '2021-12-07 18:50:20', '2021-12-09 06:01:39');

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
(1, 3, 'sub user', 'sub admin users', NULL, '2021-11-26 09:03:21', '2021-11-26 09:03:21'),
(3, 2, 'sub user', 'sub admin users', NULL, '2021-11-29 05:33:46', '2021-11-29 05:33:46'),
(4, 1, 'test ', 'deal', NULL, '2021-12-01 13:20:07', '2021-12-01 13:20:07'),
(5, 29, 'fffff', 'ffffffff333', NULL, '2021-12-10 08:53:03', '2021-12-10 08:53:17');

-- --------------------------------------------------------

--
-- Table structure for table `vendoresps`
--

CREATE TABLE `vendoresps` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendoresps`
--

INSERT INTO `vendoresps` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 29, 'Maite ttt', NULL, 'hatovude@mailinator.com', 'fgggggggggggg', 'undefined', 'Maite ttt', 'hatovude@mailinator.com', '73333333333', '73333333333', 'undefined', 'Officiis dolores asp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'krishna@gmail.com', 'undefined', 'undefined', 'undefined', NULL, NULL, NULL, NULL, '2021-12-10 12:17:47', '2021-12-10 08:33:59'),
(2, 34, 'Eve', 'null', 'teqawudar@mailinator.com', 'Eve', 'teqawudar@mailinator.com', 'Eve', 'teqawudar@mailinator.com', '32', '32', 'null', 'Natus eveniet repud', NULL, NULL, NULL, NULL, NULL, '[1,4]', NULL, 'null', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-11 18:14:25', '2021-12-11 13:07:02');

-- --------------------------------------------------------

--
-- Table structure for table `vendorita`
--

CREATE TABLE `vendorita` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorita`
--

INSERT INTO `vendorita` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 25, 'MacKenzie Kala', 'ddddddddd', 'niha@mailinator.com', 'MacKenzie Kala', 'niha@mailinator.com', 'MacKenzie Kala', 'niha@mailinator.com', '60', '60', NULL, 'Veritatis id eveniet', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-07 18:07:28', '0000-00-00 00:00:00'),
(2, 30, 'Ciara Alllow', 'dddddddddddddddd', 'ritudito@mailinator.com', 'Ciara Alllow', 'ritudito@mailinator.com', 'Ciara Alllow', 'ritudito@mailinator.com', '2922222222', '2922222222', 'null', 'Eum harum aute quod ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-11 14:41:53', '2021-12-11 09:17:08'),
(3, 33, 'Clare', 'krishna mishra', 'luzasy@mailinator.com', 'Clare', 'luzasy@mailinator.com', 'Clare', 'luzasy@mailinator.com', '14', '14', 'null', 'Adipisicing harum eo', NULL, NULL, NULL, NULL, NULL, '[4,29,25]', NULL, 'null', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-11 14:55:37', '2021-12-11 12:43:56');

-- --------------------------------------------------------

--
-- Table structure for table `vendormemberships`
--

CREATE TABLE `vendormemberships` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `interval` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendormemberships`
--

INSERT INTO `vendormemberships` (`id`, `name`, `description`, `slug`, `interval`, `price`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'FREE', 'Listing on the Website\r\nYour Business Name\r\nStore Address + Phone Number + Email + Social media links\r\nWebsite Info and Link\r\nUpload Business Images & Videos\r\nComplete use of our platform', 'free', 'yearly', 0, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'STANDARD', 'All what is included in Free Membership Package +\r\nBusiness featured on appropriate departments\r\nGet priority in search results', 'standard', 'monthly', 5.99, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'PREMIUM', 'All what is included in Free & Standard membership +\r\nGet Featured on Homepage in the country your business is located', 'premium', 'monthly', 7.99, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  `wallet_balance` double NOT NULL DEFAULT '0',
  `subscription_plan` varchar(255) DEFAULT NULL,
  `featured_business` tinyint(1) NOT NULL DEFAULT '0',
  `hot_deal` tinyint(1) NOT NULL DEFAULT '0',
  `business_dvertise` tinyint(1) NOT NULL DEFAULT '0',
  `status` int(11) DEFAULT NULL,
  `membership_id` int(11) DEFAULT NULL,
  `adds_membership_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `name`, `email`, `mobile`, `address`, `password`, `country_id`, `category_id`, `country`, `department`, `wallet_balance`, `subscription_plan`, `featured_business`, `hot_deal`, `business_dvertise`, `status`, `membership_id`, `adds_membership_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Krishna Mishra', 'krishna34@gmail.com', 'dd', 'dd', '$2a$10$IDreqkicRs4BH/vC.5mgIu7O9UvaeUlLl3DSMVJWolcjDSaaKTlqG', NULL, NULL, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-11-25 09:30:16', '2021-11-25 09:30:16'),
(2, 'Krishna Mishra', 'krishna1@gmail.com', 'dd', 'dd', '$2a$10$YsgTqlhEiBLifEhSH8JvruclDxNhHnHpI7h3kKsT.TLCuuklVpsaa', 3, 3, NULL, NULL, 100, NULL, 0, 0, 0, NULL, 2, NULL, '2021-11-25 09:32:10', '2021-12-13 12:15:10'),
(3, 'Krishna Mishra', 'krishna14@gmail.com', 'dd', 'dd', '$2a$10$VM15vS82yX5E6VV7K8/DvefqPHZTkbgAGcCaJLrBVJc9A30Xk.l3i', 3, 3, NULL, NULL, 100.55, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-11-25 09:36:43', '2021-12-13 10:00:51'),
(4, 'Krishna Mishra', 'krishna143@gmail.com', 'dd', 'dd', '$2a$10$.mhh1axeEUvdjPyWpCaMXuhT6dRneZwGptkn2U.7fPZ.2YvlWkAeG', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-11-25 09:48:02', '2021-11-25 09:48:02'),
(5, 'Krishna Mishra', 'krishna143w@gmail.com', 'dd', 'dd', '$2a$10$I7U0S0snB8v7ZJmW.PqzQ.kV/ENFJ5L4IGiyQ4l099FFdiHua5eUm', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-11-25 12:00:43', '2021-11-25 12:00:43'),
(6, 'Orlando Jennings', 'wugy@mailinator.com', '1', 'Autem consequatur S', '$2a$10$5HK0x2xAvGcc/.4Oli4XI.3X/9fmLKWuRl/c.EBE74Iu.OBL1in9O', 3, 4, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-11-26 07:21:13', '2021-11-26 07:21:13'),
(7, 'Tamara .', 'pazomes@mailinator.com', '90', 'Facere tempora et qu', '$2a$10$Tph1FcTPI2Npy2jZObVHD.MmA2ay7izCEa.mA4GeH3sMT4W5B29.e', 2, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:16:49', '2021-12-07 09:16:49'),
(8, 'Ima .', 'cejuzoca@mailinator.com', '9444444', 'Rerum architecto con', '$2a$10$xxQbTS7hZrXVh4XIVpOvuO2gL33kX4fdDylY6dUnKu3Na4S4ubJPO', 5, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:18:10', '2021-12-07 09:18:10'),
(9, 'Krishna Mishra', 'krishna1439@gmail.com', 'dd', 'dd', '$2a$10$VEaEVM7lluJidcbHGX3zxOYbuT.gmWAkWrVNwxFSxfZ.ft6QfvsCW', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:24:05', '2021-12-07 09:24:05'),
(10, 'Krishna Mishra', 'krishna13439@gmail.com', 'dd', 'dd', '$2a$10$Xc5VPt7CokOJnYCSpyebwus3XyDSHPfY2jRNBm5HFBIymAoKdzFkm', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:28:44', '2021-12-07 09:28:44'),
(11, 'Krishna Mishra', 'ff@gmail.com', 'dd', 'dd', '$2a$10$ghVwYVciIzj6dRch6wDd9eUBSlqcCHDeaifgdfrKombBoRy3D3e72', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:55:40', '2021-12-07 09:55:40'),
(12, 'Krishna Mishra', 'ff1@gmail.com', 'dd', 'dd', '$2a$10$TRx9zq0LFFPs67M4LZIPmOnxbr2gGWX.aGVVEHCoFern9EijmGKnK', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:57:02', '2021-12-07 09:57:02'),
(13, 'Krishna Mishra', 'ff21@gmail.com', 'dd', 'dd', '$2a$10$6zTI7KzAYKDr5.N.OFGLu.4IUdFihD5w0H2Tc2MrofW6FjjmyK.ci', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:58:01', '2021-12-07 09:58:01'),
(14, 'Krishna Mishra', 'ff213@gmail.com', 'dd', 'dd', '$2a$10$7dIlQGA36t45ddjJFlij3eZ/jgKVvAdpIKVU6AcyTVSztA4wsAFEK', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 09:59:09', '2021-12-07 09:59:09'),
(15, 'Krishna Mishra', 'ff2134@gmail.com', 'dd', 'dd', '$2a$10$kGo4wuE6st11aCUBblHUreGZJFsu79QJd3tNqm.R7ryeNPaP5bBOC', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:01:31', '2021-12-07 10:01:31'),
(16, 'Krishna Mishra', 'ff213dd4@gmail.com', 'dd', 'dd', '$2a$10$TIIQKNmjObOqpzAGM0UuZuxmaFk.CmOL7p.D2L6JnuR4t6rYXWFtK', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:03:39', '2021-12-07 10:03:39'),
(17, 'Krishna Mishra', 'ff213dd4e@gmail.com', 'dd', 'dd', '$2a$10$G73NtQStV3yxa7MOLJ6GMuI50aU84nJChCmZHANDXuzhZLA1uzeZW', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:05:32', '2021-12-07 10:05:32'),
(18, 'Krishna Mishra', 'jjj@gmail.com', 'dd', 'dd', '$2a$10$wy6wiFoykI6lxCCFrchEOeGdy83AXITAESpuQ2EP.7gD4ZW5pBmQG', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:08:19', '2021-12-07 10:08:19'),
(19, 'Krishna Mishra', 'jjdj@gmail.com', 'dd', 'dd', '$2a$10$QgHnGHvFhWzIvjDHYk9nHO.aQONbtubY1qAdC4Rw3mpNrhoCsS1li', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:09:58', '2021-12-07 10:09:58'),
(20, 'Krishna Mishra', 'jjd3j@gmail.com', 'dd', 'dd', '$2a$10$aUAVhMt1fB6ShcX6HFprvuGjatQYhUT6j.yWPRLGHnob.c6Vjt8xS', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:19:28', '2021-12-07 10:19:28'),
(21, 'Krishna Mishra', 'jjd34j@gmail.com', 'dd', 'dd', '$2a$10$/.fGrUNYrVH0kVV3kLrLPumDOaxKPWSOOCVxMh4WzWTKI5Cimhdxi', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:21:20', '2021-12-07 10:21:20'),
(22, 'Krishna Mishra', 'jjd3f4j@gmail.com', 'dd', 'dd', '$2a$10$937uJx5tJlvhTa9UQcxaR.lpafXsoK60hSfoTEPmJBTL1pyaqW6Mi', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:24:11', '2021-12-07 10:24:11'),
(23, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$dlIG.G7LOZ.KrrJX2KHVDuADJWvW/CwtOUl67O7WudkH2KKvlWBjC', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 10:31:41', '2021-12-09 06:02:13'),
(24, 'Hillary', 'xajepunylo@mailinator.com', '29', 'Officia maxime iusto', '$2a$10$MHLDkDcMn5TQWVua33a7delnnGRFpS.sbQc1UMWtCL1ElUYNXD.h2', 4, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 12:35:19', '2021-12-07 12:35:19'),
(25, 'MacKenzie Kala', 'niha@mailinator.com', '60', 'Veritatis id eveniet', '$2a$10$7UG8iF7YPXSq3pKJoaE4ted9TuYiVV8/LLJz7hu9CgvNrtsqT5nkm', 4, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 12:37:28', '2021-12-07 12:37:28'),
(26, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$rE7L85fGxXoFMdvCEIK93e9Sp2hYhqPz1wlMeiD4ZVI9XfgLPGZ.G', 3, 3, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-07 13:20:20', '2021-12-09 06:02:18'),
(27, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$EfHVcbTCgWZ9lC7DCtwNSudfc63LbEKxDkPDfdXg130F0Hd7QmMMe', 3, 3, NULL, NULL, 0, NULL, 1, 1, 0, NULL, NULL, NULL, '2021-12-08 08:48:01', '2021-12-10 07:58:47'),
(28, 'Dominic Tech', 'samo@mailinator.com', '232323232', 'Quod possimus corru', '$2a$10$Q666bPrwJ4Dbe.rqyXk/zu5YJD.V5f83y4zyn2usUerHsWn9o5KwC', 1, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-10 06:44:20', '2021-12-10 06:44:20'),
(29, 'Maite ttt', 'hatovude@mailinator.com', '73333333333', 'Officiis dolores asp', '$2a$10$mz5ilbN.Zasdmzj4Xr4GCe5CIy8/dQPs1i9zYcQkQOhxnlzA3vFrm', 6, 25, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-10 06:47:47', '2021-12-10 06:47:47'),
(30, 'Ciara Alllow', 'ritudito@mailinator.com', '2922222222', 'Eum harum aute quod ', '$2a$10$0vuGPW6S/s189P68qOzgCujVOFSxQOdvusU/Xzm3ItwFcqPKI3bMe', 4, 29, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-11 08:47:31', '2021-12-11 08:47:31'),
(31, 'Kyla Ree', 'soquha@mailinator.com', '93333333333', 'Reprehenderit excep', '$2a$10$kJfEmsamkH3mIPLMfX0WDuIAZETCscv20dxTCNck0sCMWUrvMuH6O', 5, 25, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-11 09:18:02', '2021-12-11 09:18:02'),
(32, 'Solomon', 'nerucevaky@mailinator.com', '54', 'Non culpa quis quibu', '$2a$10$hvsCV2uFrRjuSkXHrCDv2uEERnq0eDydnvOiNvpNPyZwRTiBPA8GS', 3, 4, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-11 09:25:01', '2021-12-11 09:25:01'),
(33, 'Clare', 'luzasy@mailinator.com', '14', 'Adipisicing harum eo', '$2a$10$DwHoT3f3oDTm1UUN5.R1zus/bsXz70G1LFV5jn5G8T7ZXMatmA/TC', 4, 4, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-11 09:25:37', '2021-12-11 09:25:37'),
(34, 'Eve', 'teqawudar@mailinator.com', '32', 'Natus eveniet repud', '$2a$10$JzmXaOL9DabV16yOPQZrouIG0mysV9KZIIVpUZzHQwswGdudYDrXa', 6, 1, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-11 12:44:25', '2021-12-11 12:44:25'),
(35, 'Whitney Talk', 'povovazuf@mailinator.com', '361222222', 'Ratione eligendi iru', '$2a$10$jgFkt7SPVyLv7yl.b11N5.oPZntm/28fN0EHxC7q8D4X2jYOTpa6u', 5, 25, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-13 06:04:24', '2021-12-13 06:04:24'),
(36, 'Simon', 'woresyluqe@mailinator.com', '2522222222222', 'Magna recusandae Au', '$2a$10$DgTRIC9eKB8wDVDMAlAt2uVVBHGI2ZBwBCE7tl614P4xyAKpDpQCG', 3, 25, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, '2021-12-13 08:07:46', '2021-12-13 08:07:46');

-- --------------------------------------------------------

--
-- Table structure for table `vendoruks`
--

CREATE TABLE `vendoruks` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendoruks`
--

INSERT INTO `vendoruks` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 18, 'Krishna Mishra', NULL, 'jjj@gmail.com', 'Krishna Mishra', 'jjj@gmail.com', 'Krishna Mishra', 'jjj@gmail.com', 'dd', 'dd', NULL, 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 19, 'Krishna Mishra', NULL, 'jjdj@gmail.com', 'Krishna Mishra', 'jjdj@gmail.com', 'Krishna Mishra', 'jjdj@gmail.com', 'dd', 'dd', NULL, 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 22, 'Krishna Mishra', NULL, 'jjd3f4j@gmail.com', 'Krishna Mishra', 'jjd3f4j@gmail.com', 'Krishna Mishra', 'jjd3f4j@gmail.com', 'dd', 'dd', NULL, 'dd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-07 15:54:11', '0000-00-00 00:00:00'),
(4, 23, 'Oscar', 'laxman Mishra', 'wybaru@mailinator.com', 'Oscar', 'wybaru@mailinator.com', 'Harriet', 'wekex@mailinator.com', '8188888888888', '816666666', 'null', 'In harum minima amet', NULL, NULL, NULL, NULL, NULL, '[\"1\",\"3\"]', 'banner_1639029764978.jpg', 'null', 'null', 'null', 'null', NULL, NULL, 0, NULL, '2021-12-07 16:01:41', '2021-12-09 06:02:45'),
(5, 27, 'Oscar', 'laxman Mishra', 'wybaru@mailinator.com', 'Oscar', 'wybaru@mailinator.com', 'Oscar', 'wybaru@mailinator.com', '8188888888888', '816666666', 'null', 'In harum minima amet', NULL, NULL, NULL, NULL, NULL, '[\"1\",\"3\"]', 'banner_1639029756340.jpg', 'null', 'null', 'null', 'null', NULL, NULL, 0, NULL, '2021-12-08 14:18:01', '2021-12-09 06:02:36'),
(6, 32, 'Solomon', NULL, 'nerucevaky@mailinator.com', 'Solomon', 'nerucevaky@mailinator.com', 'Solomon', 'nerucevaky@mailinator.com', '54', '54', NULL, 'Non culpa quis quibu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-11 14:55:01', '0000-00-00 00:00:00'),
(7, 36, 'Simon', 'null', 'woresyluqe@mailinator.com', 'Simon', 'woresyluqe@mailinator.com', 'Simon', 'woresyluqe@mailinator.com', '2522222222222', '2522222222222', 'null', 'Magna recusandae Au', NULL, NULL, NULL, NULL, NULL, '[4,25]', 'banner_1639383898045.png', 'testing', 'null', 'null', 'null', NULL, NULL, NULL, NULL, '2021-12-13 13:37:47', '2021-12-13 08:24:58');

-- --------------------------------------------------------

--
-- Table structure for table `vendorusas`
--

CREATE TABLE `vendorusas` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `about_business` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `manager_email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `categories` text,
  `banner` varchar(255) DEFAULT NULL,
  `website_link` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `deletedAt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorusas`
--

INSERT INTO `vendorusas` (`id`, `user_id`, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 28, 'Dominic Tech', NULL, 'samo@mailinator.com', 'Dominic Tech', 'samo@mailinator.com', 'Dominic Tech', 'samo@mailinator.com', '232323232', '232323232', NULL, 'Quod possimus corru', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-10 12:14:20', '0000-00-00 00:00:00');

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
(4, 3, 'sub user3', 'sub admin users', NULL, '2021-11-25 11:40:30', '2021-11-25 11:40:30'),
(5, 29, '3', 'https://www.youtube.com/embed/tgbNymZ7vqY', NULL, '2021-12-10 08:50:50', '2021-12-10 13:01:10'),
(6, 29, '1', 'https://www.youtube.com/embed/tgbNymZ7vqY', NULL, '2021-12-10 13:00:33', '2021-12-10 13:00:33'),
(7, 29, '2', 'https://www.youtube.com/embed/tgbNymZ7vqY', NULL, '2021-12-10 13:00:49', '2021-12-10 13:00:49'),
(8, 29, '4', 'https://www.youtube.com/embed/tgbNymZ7vqY', NULL, '2021-12-10 13:01:29', '2021-12-10 13:01:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountspayables`
--
ALTER TABLE `accountspayables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addsmemberships`
--
ALTER TABLE `addsmemberships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adspaces`
--
ALTER TABLE `adspaces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `businessadvertises`
--
ALTER TABLE `businessadvertises`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `couponcategories`
--
ALTER TABLE `couponcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `couponusers`
--
ALTER TABLE `couponusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `featuredbusinesses`
--
ALTER TABLE `featuredbusinesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotdeals`
--
ALTER TABLE `hotdeals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobopenings`
--
ALTER TABLE `jobopenings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `latestadditions`
--
ALTER TABLE `latestadditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `memberships`
--
ALTER TABLE `memberships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menuitems`
--
ALTER TABLE `menuitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `perm_name` (`perm_name`);

--
-- Indexes for table `profilecategories`
--
ALTER TABLE `profilecategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `saleitems`
--
ALTER TABLE `saleitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `sitesettings`
--
ALTER TABLE `sitesettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vendoraus`
--
ALTER TABLE `vendoraus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendorcans`
--
ALTER TABLE `vendorcans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendorcoupons`
--
ALTER TABLE `vendorcoupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendoresps`
--
ALTER TABLE `vendoresps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendorita`
--
ALTER TABLE `vendorita`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendormemberships`
--
ALTER TABLE `vendormemberships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendoruks`
--
ALTER TABLE `vendoruks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendorusas`
--
ALTER TABLE `vendorusas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videogalleries`
--
ALTER TABLE `videogalleries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountspayables`
--
ALTER TABLE `accountspayables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `addsmemberships`
--
ALTER TABLE `addsmemberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `adspaces`
--
ALTER TABLE `adspaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `businessadvertises`
--
ALTER TABLE `businessadvertises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `couponcategories`
--
ALTER TABLE `couponcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `couponusers`
--
ALTER TABLE `couponusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `featuredbusinesses`
--
ALTER TABLE `featuredbusinesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `hotdeals`
--
ALTER TABLE `hotdeals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `jobopenings`
--
ALTER TABLE `jobopenings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `latestadditions`
--
ALTER TABLE `latestadditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `memberships`
--
ALTER TABLE `memberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `menuitems`
--
ALTER TABLE `menuitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `profilecategories`
--
ALTER TABLE `profilecategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `saleitems`
--
ALTER TABLE `saleitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sitesettings`
--
ALTER TABLE `sitesettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `vendoraus`
--
ALTER TABLE `vendoraus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vendorcans`
--
ALTER TABLE `vendorcans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendorcoupons`
--
ALTER TABLE `vendorcoupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vendoresps`
--
ALTER TABLE `vendoresps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vendorita`
--
ALTER TABLE `vendorita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vendormemberships`
--
ALTER TABLE `vendormemberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `vendoruks`
--
ALTER TABLE `vendoruks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `vendorusas`
--
ALTER TABLE `vendorusas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videogalleries`
--
ALTER TABLE `videogalleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
