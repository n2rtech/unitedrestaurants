-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2021 at 03:55 PM
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
-- Table structure for table `Users`
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
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `role_id`, `category_id`, `country_id`, `role`, `email`, `password`, `name`, `business_type`, `phone`, `mobile`, `address`, `createdAt`, `deletedAt`, `updatedAt`) VALUES
(1, 2, NULL, NULL, NULL, 'cugano@mailinator.com', '$2a$10$jqurPMvyqyJHTsFRknRhT.4iZKsvz.9h9.CX6WD1CaXDgkQfptYmq', 'Illana Rhodes', 'Suppliers', NULL, NULL, 'Cum enim unde enim i', '2021-11-22 06:51:33', NULL, '2021-11-22 06:51:33'),
(2, 3, NULL, NULL, NULL, 'didin@djamware.com', '$2a$10$yhuWdDz8YRqvAgKW7o7JxeS/6ABtol3m7N6wY3lEsI9ulvn2KvEmK', 'Laxman Mishra', NULL, '0998998998', '9454045599', 'test address', '2021-11-12 10:05:27', NULL, '2021-11-17 12:39:33'),
(3, 2, 3, NULL, NULL, 'jarefiwoko@mailinator.com', '$2a$10$LaiKB0gIRot.GeT.74.L2u2B4gg2591wr.eOy1wgf8iYMOoci2992', 'Quin Barrera', NULL, NULL, NULL, 'Maiores voluptas sim', '2021-11-22 08:24:36', NULL, '2021-11-22 08:24:36'),
(5, 5, NULL, NULL, NULL, 'krishna8@gmail.com', '$2a$10$S4SjKNBjozK7uKCdcp7ZOODX2d4.hrCADzHKD6E788DGVOHKXS/YW', 'undefined undefined', NULL, NULL, NULL, NULL, '2021-12-27 10:12:34', NULL, '2021-12-27 10:12:34'),
(6, 1, NULL, NULL, 'admin', 'krishna@gmail.com', '$2a$10$xK/80r6a.M7YQ8b0QndXhutktRT59DEXE09VkDSUpiDuHPdYo5FLC', 'Krishna Mishra', NULL, '9026574061', '9026574061', 'test addess', '0000-00-00 00:00:00', NULL, '0000-00-00 00:00:00'),
(7, 6, NULL, NULL, NULL, 'krishnabbk@gmail.com', '$2a$10$svzre/sSNH.3KrMt0jq8NueeLfRMTnaTkfgNBHQpsT06BiUJpHomu', 'Laxman Mishra', NULL, '9454045599', '9454045599', 'test address', '2021-11-12 10:08:13', NULL, '2021-11-12 10:08:13'),
(8, 2, NULL, NULL, 'vendor', 'laxman@gmail.com', '$2a$10$lbKBJSi7KQk5gVB0cayE1O/xwpL4kLf4G/HcAGkYLKT5NoA0Jt/VG', 'Laxman Mishra', NULL, '9454045599', '9454045599', 'test address', '0000-00-00 00:00:00', NULL, '0000-00-00 00:00:00'),
(9, 3, NULL, NULL, NULL, 'laxmanbbk@gmail.com', '$2a$10$sN3FTdd3Fra30tqsUP5iU..eK06TRkKsEsE/rz7XRl/X2Xmj9dwlm', 'Laxman Mishra', NULL, NULL, NULL, 'test address', '2021-11-12 09:54:35', NULL, '2021-11-12 09:54:35'),
(10, 7, NULL, NULL, NULL, 'merchant1@gmail.com', '$2a$10$nONX6CQHc3QRvpt1yNUHBuFgc1j5kh7rsTzH2hrrmcIR/0y9aDE0e', 'Krishna Mishra', NULL, '9026574061', NULL, NULL, '2021-11-18 10:51:32', NULL, '2021-11-18 10:51:32'),
(11, 7, NULL, NULL, NULL, 'merchant2@gmail.com', '$2a$10$aXttmuYeCVJ3UI0XCdHp7OjWeUBfYGaw67BYc9Z3dYp6HmlyFp7J2', 'Krishna Mishra', NULL, '9026574061', '9026574061', NULL, '2021-11-18 10:53:24', NULL, '2021-11-18 10:53:24'),
(12, 7, NULL, NULL, NULL, 'merchant3@gmail.com', '$2a$10$kfnPGgliibtmqHprnSQ3Aebh2l9fx0mgC2DDJjOs.dBWos.inA3zO', 'Krishna Mishra', NULL, '9026574061', '9026574061', 'test 1 address', '2021-11-18 10:54:02', NULL, '2021-11-18 10:54:02'),
(13, 2, NULL, NULL, NULL, 'merchant@gmail.com', '$2a$10$tj4nb2djQzI3WXT56/1hMe02kRqme7oUU.4g2ONpL1n0SBRg85gpa', 'Krishna Mishra', NULL, NULL, NULL, NULL, '2021-11-18 10:39:13', NULL, '2021-11-18 10:39:13'),
(14, 2, 1, NULL, NULL, 'nydarin@mailinator.com', '$2a$10$q/h0XJ004R4SLmXCY8cEzuTxIUksj/27KfpkV4fL/MGHaQEfs0DH2', 'Cheyenne Rowe', NULL, NULL, NULL, 'Veniam quo nobis cu', '2021-11-22 08:23:33', NULL, '2021-11-22 08:23:33'),
(15, 2, NULL, NULL, NULL, 'nynilufim@mailinator.com', '$2a$10$o5K1urneLd2MzLgQ9zp.W.lD9Jyb6JzRMIOnefzIvPSnwvEzqKd9u', 'Anne William', NULL, NULL, NULL, 'Numquam sunt aut qu', '2021-11-16 12:12:20', NULL, '2021-11-16 12:12:20'),
(16, 2, NULL, NULL, NULL, 'piresyruqe@mailinator.com', '$2a$10$1kzz9uajul/yfrFzYjSoJuqvlwnmvnU.A48x3ORUurLBHfn.0rkRK', 'Adena Holloway', NULL, NULL, NULL, 'Tempor consectetur r', '2021-11-12 13:40:38', NULL, '2021-11-12 13:40:38'),
(17, 2, 3, 3, NULL, 'pyzob@mailinator.com', '$2a$10$jiZcr/Ae7htdNeoyZ4Qs2eZbe5hL7nxSunQV0ZOzVqVSQNQ./W7Ba', 'Abbot Maldonado', NULL, NULL, NULL, 'Maiores facere culpa', '2021-11-22 09:27:59', NULL, '2021-11-22 09:27:59'),
(18, 2, 1, 2, NULL, 'qonifixup@mailinator.com', '$2a$10$RJaff32OJkXkM.E1F9MO/ug9Pp3VHq51c4C.3DYQCvo58WzH0reM.', 'Kimberly Hayes', NULL, NULL, NULL, 'Fugit id repellendu', '2021-11-22 09:29:46', NULL, '2021-11-22 09:29:46'),
(19, 5, NULL, NULL, NULL, 'revehakyz@mailinator.com', '$2a$10$B8Ixw95iPzNlTTaeTtwe2OJU5R/tJOF6Dnw2Fb./BOcOLZV8vZp/q', 'Karina Hunt', NULL, NULL, NULL, 'Aperiam illum labor', '2021-11-12 10:11:06', NULL, '2021-11-12 10:11:06'),
(20, 2, 4, 3, NULL, 'tafow@mailinator.com', '$2a$10$kKvZRqlZA3ne7Zf9dY/PnehRHjVOaThdSGaVIhz6KeIVg6KC/3ZjG', 'Iris Campbell', NULL, '75', '75', 'Rerum labore quas la', '2021-11-23 08:21:25', NULL, '2021-11-23 08:21:25'),
(21, 2, 3, 2, NULL, 'tuwazy@mailinator.com', '$2a$10$7vjQBU.b7fYJIcy.vcDEduaALCeacI284wvsRPvXXTOHao4YVSbOq', 'Rosalyn Mcconnell', NULL, NULL, NULL, 'Quisquam sit aut ip', '2021-11-23 08:18:20', NULL, '2021-11-23 08:18:20'),
(22, 2, 1, 2, NULL, 'wesocimyx@mailinator.com', '$2a$10$R4IA2nu7flHCrJNXC.30SeH9vacHav0kbWKYWlPhGkaJTgYulBsdG', 'Anthony Acevedo', NULL, NULL, NULL, 'Corporis architecto ', '2021-11-23 08:17:39', NULL, '2021-11-23 08:17:39'),
(23, 2, NULL, NULL, NULL, 'zozuc@mailinator.com', '$2a$10$JCz9FVy/fCSwmWgKq9MMje3H5lOyLk2/5OfRMo4hY8GmWCiQS9QqG', 'Charde Richards', NULL, NULL, NULL, 'Est quia saepe nisi ', '2021-11-22 06:38:36', NULL, '2021-11-22 06:38:36'),
(24, 4, NULL, NULL, NULL, 'krishna9@gmail.com', '$2a$10$JM0QX7T5KBL.NUSs4SgMZeCb/OkXNsdS1t3308Sl74Cfh0zqNgC.G', 'undefined undefined', NULL, NULL, NULL, NULL, '2021-12-27 10:22:15', NULL, '2021-12-27 10:22:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
