-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2021 at 06:24 AM
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
(1, 'permissions_add', 'permissions_add', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'role_add', 'role_add', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'edit_user', 'edit_user', '2021-11-12 08:03:34', '2021-11-12 08:03:34'),
(6, 'delete_user', 'edit_user', '2021-11-12 08:31:08', '2021-11-12 08:31:08'),
(7, 'test_add', 'edit_user', '2021-11-12 10:14:28', '2021-11-12 10:14:28'),
(8, 'permissions_get_all', 'permissions_get_all', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'role_get_all', 'Get all roles', '2021-11-12 13:26:25', '2021-11-12 13:26:25');

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
(2, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 6, '2021-11-12 13:04:30', '2021-11-12 13:04:30'),
(7, 1, 7, '2021-11-12 13:04:30', '2021-11-12 13:04:30'),
(8, 1, 3, '2021-11-12 13:11:48', '2021-11-12 13:11:48'),
(9, 4, 3, '2021-11-12 13:12:05', '2021-11-12 13:12:05'),
(10, 4, 6, '2021-11-12 13:12:05', '2021-11-12 13:12:05'),
(11, 1, 9, '2021-11-12 13:26:50', '2021-11-12 13:26:50');

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
(2, 'vendor', 0, 'vendor', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'seratory', 0, 'seratory', '2021-11-12 08:01:30', '2021-11-12 08:01:30'),
(4, 'customer', 0, 'customer', '2021-11-12 08:35:09', '2021-11-12 08:35:09'),
(5, 'test', 0, 'customer', '2021-11-12 10:14:12', '2021-11-12 10:14:12'),
(6, 'staff', 0, 'Staff', '2021-11-12 12:31:12', '2021-11-12 12:31:12');

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
('20211112064802-create-role-permission.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `role` varchar(151) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(151) DEFAULT NULL,
  `address` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `role`, `email`, `password`, `name`, `phone`, `mobile`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'admin', 'krishna@gmail.com', '$2a$10$xK/80r6a.M7YQ8b0QndXhutktRT59DEXE09VkDSUpiDuHPdYo5FLC', 'Krishna Mishra', '9026574061', '9026574061', 'test addess', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 4, 'vendor', 'laxman@gmail.com', '$2a$10$lbKBJSi7KQk5gVB0cayE1O/xwpL4kLf4G/HcAGkYLKT5NoA0Jt/VG', 'Laxman Mishra', '9454045599', '9454045599', 'test address', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, NULL, 'laxmanbbk@gmail.com', '$2a$10$sN3FTdd3Fra30tqsUP5iU..eK06TRkKsEsE/rz7XRl/X2Xmj9dwlm', 'Laxman Mishra', NULL, NULL, 'test address', '2021-11-12 09:54:35', '2021-11-12 09:54:35'),
(4, 2, NULL, 'laxmanbb1@gmail.com', '$2a$10$RgdS1xu8lQCODtuzVPFL7.F1xs5qt77vkqgoKp1qlTF3QLYcpyoB.', 'Laxman Mishra', '9454045599', '9454045599', 'test address', '2021-11-12 10:05:27', '2021-11-12 10:05:27'),
(5, 6, NULL, 'krishnabbk@gmail.com', '$2a$10$svzre/sSNH.3KrMt0jq8NueeLfRMTnaTkfgNBHQpsT06BiUJpHomu', 'Laxman Mishra', '9454045599', '9454045599', 'test address', '2021-11-12 10:08:13', '2021-11-12 10:08:13'),
(6, 5, NULL, 'revehakyz@mailinator.com', '$2a$10$B8Ixw95iPzNlTTaeTtwe2OJU5R/tJOF6Dnw2Fb./BOcOLZV8vZp/q', 'Karina Hunt', NULL, NULL, 'Aperiam illum labor', '2021-11-12 10:11:06', '2021-11-12 10:11:06'),
(7, 2, NULL, 'piresyruqe@mailinator.com', '$2a$10$1kzz9uajul/yfrFzYjSoJuqvlwnmvnU.A48x3ORUurLBHfn.0rkRK', 'Adena Holloway', NULL, NULL, 'Tempor consectetur r', '2021-11-12 13:40:38', '2021-11-12 13:40:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `perm_name` (`perm_name`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
