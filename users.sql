-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2021 at 07:32 AM
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
(2, 4, NULL, NULL, 'vendor', 'laxman@gmail.com', '$2a$10$lbKBJSi7KQk5gVB0cayE1O/xwpL4kLf4G/HcAGkYLKT5NoA0Jt/VG', 'Laxman Mishra', NULL, '9454045599', '9454045599', 'test address', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
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
(19, 2, 1, 2, NULL, 'qonifixup@mailinator.com', '$2a$10$RJaff32OJkXkM.E1F9MO/ug9Pp3VHq51c4C.3DYQCvo58WzH0reM.', 'Kimberly Hayes', NULL, NULL, NULL, 'Fugit id repellendu', '2021-11-22 09:29:46', '2021-11-22 09:29:46');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
