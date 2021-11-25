-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 06:22 AM
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
(2, 'Sunglasses', 'Sunglasses', NULL, 1, NULL, '', 1, 1, '2021-11-15 07:41:15', '2021-11-15 07:41:15'),
(4, 'krishna', 'Krishna Mishra', NULL, 2, NULL, 'image_1637739295874.jpg', 1, 1, '2021-11-15 07:46:54', '2021-11-24 07:34:55'),
(5, 'watches', 'watches', NULL, 2, NULL, '', 1, 1, '2021-11-15 07:47:27', '2021-11-15 07:47:27'),
(6, 'Bags', 'Bags', NULL, 4, NULL, '', 1, 1, '2021-11-15 07:48:36', '2021-11-15 07:48:36'),
(7, 'Chains', 'Chains', NULL, 6, NULL, '', 1, 1, '2021-11-15 07:49:09', '2021-11-15 07:49:09'),
(8, 'Bevrages', 'Bevrages', NULL, 3, NULL, '', 1, 1, '2021-11-15 07:49:30', '2021-11-15 07:49:30'),
(9, ' Bevrages2,', ' Bevrages1,', NULL, 4, NULL, ',', 1, 1, '2021-11-15 11:58:26', '2021-11-15 11:58:26'),
(10, 'krishna', 'Krishna Mishra', NULL, 4, NULL, 'image_1637678071773.jpg', 1, 1, '2021-11-16 09:56:48', '2021-11-23 14:34:31'),
(11, 'Bevrages7', 'Bevrages6', NULL, 7, NULL, 'image_1637057493463.jpg', 1, 1, '2021-11-16 10:11:33', '2021-11-16 10:11:33'),
(18, 'Bevrages711', 'Bevrages6', NULL, 7, NULL, 'image_1637737637873.jpg', 1, 1, '2021-11-24 07:07:17', '2021-11-24 07:07:17');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Australia', NULL, '2021-11-22 09:08:09', '2021-11-22 09:08:09'),
(2, 'Canada', NULL, '2021-11-22 09:08:46', '2021-11-22 09:08:46'),
(3, 'Italy', NULL, '2021-11-22 09:11:04', '2021-11-22 09:11:04'),
(4, 'Spain', NULL, '2021-11-22 09:11:11', '2021-11-22 09:11:11'),
(5, 'United Kingdom', NULL, '2021-11-22 09:11:20', '2021-11-22 09:11:20'),
(6, 'Usa', NULL, '2021-11-22 09:11:28', '2021-11-22 09:11:28');

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
-- Table structure for table `memberships`
--

CREATE TABLE `memberships` (
  `id` int(11) NOT NULL,
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

INSERT INTO `memberships` (`id`, `status`, `name`, `description`, `slug`, `interval`, `price`, `expired_on`, `createdAt`, `updatedAt`) VALUES
(1, 0, 'kri', 'description', 'kri', 'monthly', '10.3400', '2018-01-19 13:15:00', '2021-11-18 11:14:33', '2021-11-18 11:14:33');

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
(36, 'admin ee', 'admin-ee', 'Admin Application dd', '2021-11-18 12:59:06', '2021-11-24 05:56:26');

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

--
-- Dumping data for table `profilecategories`
--

INSERT INTO `profilecategories` (`id`, `profile_id`, `category_id`, `createdAt`, `updatedAt`) VALUES
(10, 1, 2, '2021-11-25 05:03:33', '2021-11-25 05:03:33'),
(11, 1, 5, '2021-11-25 05:03:33', '2021-11-25 05:03:33');

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
(1, 2, 'string11', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'banner_1637816612642.jpg', 'string', 'string', 'string', 'string', '2021-11-24 08:20:23', '2021-11-25 05:03:32');

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
('20211125050654-create-vendor.js');

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
(22, 2, 4, 3, NULL, 'tafow@mailinator.com', '$2a$10$kKvZRqlZA3ne7Zf9dY/PnehRHjVOaThdSGaVIhz6KeIVg6KC/3ZjG', 'Iris Campbell', NULL, '75', '75', 'Rerum labore quas la', '2021-11-23 08:21:25', '2021-11-23 08:21:25');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
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
-- Indexes for dumped tables
--

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
-- Indexes for table `memberships`
--
ALTER TABLE `memberships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
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
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- AUTO_INCREMENT for table `memberships`
--
ALTER TABLE `memberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `profilecategories`
--
ALTER TABLE `profilecategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
