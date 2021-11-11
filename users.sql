-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2021 at 01:07 PM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(121) NOT NULL DEFAULT 'vendor',
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `mobile`, `address`, `password`, `remember_token`, `token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'vendor', 'krishna Mishra', 'krishna@gmail.com', '9026574061', NULL, '$2a$10$SqN3TAcn/HcMb0hYupXpBOoYW7Ty6Lv5GVIjW3uMIEgoOiuSQpjaC', NULL, 'lssssssssssssssssssseruw2380302', NULL, NULL, NULL),
(2, 'admin', 'Laxman Mishra', 'laxman@gmail.com', '9454045599', NULL, '$2a$10$jtXhjZOEqeClpAIdgY7NXOyjBD6UBDktgQx0MOAmvgHuvT8QpnMva', NULL, NULL, NULL, NULL, NULL),
(3, 'vendor', 'undefined', 'lyconu@mailinator.com', '86', NULL, '$2a$10$OFR3MI12aEGvUSUS7UnmuOeEJnbqIpdMSUV.jlvY7zjuPCKe6RJoq', NULL, NULL, NULL, NULL, NULL),
(4, 'vendor', 'Signe Miles', 'gyfato@mailinator.com', '69', NULL, '$2a$10$RxFGl7jjbfIHI6W5VnkuFuiLRDw46FtR7qhBBdt.849OG.igjCK7O', NULL, NULL, NULL, NULL, NULL),
(5, 'vendor', 'Basil Galloway', 'goquqifihe@mailinator.com', '83', NULL, '$2a$10$GyLABOD3IsduMDcffCBV4.YPYQC61mxU5dPemE4mNmX4GA4lyzJsG', NULL, NULL, NULL, NULL, NULL),
(6, 'vendor', 'Jacob Hart', 'vivas@mailinator.com', '94', NULL, '$2a$10$oBgGJki2Ue20TZFT5Xj2GusAgTGURHRB/vmO4sTurWsqNSZRgtQFO', NULL, NULL, NULL, NULL, NULL),
(7, 'vendor', 'Malachi Kirk', 'husimocomo@mailinator.com', '20', NULL, '$2a$10$novcU51b2bC4uDdJ/Gm7IeliCJgc53QdUj0Mda5Xr56fbtZrZIHNC', NULL, NULL, NULL, NULL, NULL),
(8, 'vendor', 'Keaton Ross', 'dubeqi@mailinator.com', '1912345676', NULL, '$2a$10$Cf/OkMgOtv1lRCP8bM5jdOW9BhNvKUYqWu92lE2VJkX0mPPFkBhYO', NULL, NULL, NULL, NULL, NULL),
(9, 'vendor', 'Keefe Waters', 'raxovy@mailinator.com', '13', 'Numquam rem aliqua ', '$2a$10$Qwc6E.KPSifwYNRyfMFgEegG.HPGonlEnsdw.CP1yivzXdHD3B2tm', NULL, NULL, NULL, NULL, NULL),
(10, 'vendor', 'Flavia Peters', 'vasoqifuwi@mailinator.com', '571111111', '', '$2a$10$g409HnVbKvtss.ybwRpEe.iI3/8ciBiGLupJS2.WExZspHqaGTzJe', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
