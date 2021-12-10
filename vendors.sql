-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2021 at 09:02 AM
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
  `subscription_plan` varchar(255) DEFAULT NULL,
  `featured_business` tinyint(1) NOT NULL DEFAULT '0',
  `hot_deal` tinyint(1) NOT NULL DEFAULT '0',
  `business_dvertise` tinyint(1) NOT NULL DEFAULT '0',
  `status` int(11) DEFAULT NULL,
  `membership_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `name`, `email`, `mobile`, `address`, `password`, `country_id`, `category_id`, `country`, `department`, `subscription_plan`, `featured_business`, `hot_deal`, `business_dvertise`, `status`, `membership_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Krishna Mishra', 'krishna34@gmail.com', 'dd', 'dd', '$2a$10$IDreqkicRs4BH/vC.5mgIu7O9UvaeUlLl3DSMVJWolcjDSaaKTlqG', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 09:30:16', '2021-11-25 09:30:16'),
(2, 'Krishna Mishra', 'krishna1@gmail.com', 'dd', 'dd', '$2a$10$YsgTqlhEiBLifEhSH8JvruclDxNhHnHpI7h3kKsT.TLCuuklVpsaa', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 09:32:10', '2021-11-25 09:32:10'),
(3, 'Krishna Mishra', 'krishna14@gmail.com', 'dd', 'dd', '$2a$10$VM15vS82yX5E6VV7K8/DvefqPHZTkbgAGcCaJLrBVJc9A30Xk.l3i', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 09:36:43', '2021-11-25 09:36:43'),
(4, 'Krishna Mishra', 'krishna143@gmail.com', 'dd', 'dd', '$2a$10$.mhh1axeEUvdjPyWpCaMXuhT6dRneZwGptkn2U.7fPZ.2YvlWkAeG', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 09:48:02', '2021-11-25 09:48:02'),
(5, 'Krishna Mishra', 'krishna143w@gmail.com', 'dd', 'dd', '$2a$10$I7U0S0snB8v7ZJmW.PqzQ.kV/ENFJ5L4IGiyQ4l099FFdiHua5eUm', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 12:00:43', '2021-11-25 12:00:43'),
(6, 'Orlando Jennings', 'wugy@mailinator.com', '1', 'Autem consequatur S', '$2a$10$5HK0x2xAvGcc/.4Oli4XI.3X/9fmLKWuRl/c.EBE74Iu.OBL1in9O', 3, 4, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-11-26 07:21:13', '2021-11-26 07:21:13'),
(7, 'Tamara .', 'pazomes@mailinator.com', '90', 'Facere tempora et qu', '$2a$10$Tph1FcTPI2Npy2jZObVHD.MmA2ay7izCEa.mA4GeH3sMT4W5B29.e', 2, 29, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:16:49', '2021-12-07 09:16:49'),
(8, 'Ima .', 'cejuzoca@mailinator.com', '9444444', 'Rerum architecto con', '$2a$10$xxQbTS7hZrXVh4XIVpOvuO2gL33kX4fdDylY6dUnKu3Na4S4ubJPO', 5, 29, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:18:10', '2021-12-07 09:18:10'),
(9, 'Krishna Mishra', 'krishna1439@gmail.com', 'dd', 'dd', '$2a$10$VEaEVM7lluJidcbHGX3zxOYbuT.gmWAkWrVNwxFSxfZ.ft6QfvsCW', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:24:05', '2021-12-07 09:24:05'),
(10, 'Krishna Mishra', 'krishna13439@gmail.com', 'dd', 'dd', '$2a$10$Xc5VPt7CokOJnYCSpyebwus3XyDSHPfY2jRNBm5HFBIymAoKdzFkm', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:28:44', '2021-12-07 09:28:44'),
(11, 'Krishna Mishra', 'ff@gmail.com', 'dd', 'dd', '$2a$10$ghVwYVciIzj6dRch6wDd9eUBSlqcCHDeaifgdfrKombBoRy3D3e72', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:55:40', '2021-12-07 09:55:40'),
(12, 'Krishna Mishra', 'ff1@gmail.com', 'dd', 'dd', '$2a$10$TRx9zq0LFFPs67M4LZIPmOnxbr2gGWX.aGVVEHCoFern9EijmGKnK', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:57:02', '2021-12-07 09:57:02'),
(13, 'Krishna Mishra', 'ff21@gmail.com', 'dd', 'dd', '$2a$10$6zTI7KzAYKDr5.N.OFGLu.4IUdFihD5w0H2Tc2MrofW6FjjmyK.ci', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:58:01', '2021-12-07 09:58:01'),
(14, 'Krishna Mishra', 'ff213@gmail.com', 'dd', 'dd', '$2a$10$7dIlQGA36t45ddjJFlij3eZ/jgKVvAdpIKVU6AcyTVSztA4wsAFEK', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 09:59:09', '2021-12-07 09:59:09'),
(15, 'Krishna Mishra', 'ff2134@gmail.com', 'dd', 'dd', '$2a$10$kGo4wuE6st11aCUBblHUreGZJFsu79QJd3tNqm.R7ryeNPaP5bBOC', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:01:31', '2021-12-07 10:01:31'),
(16, 'Krishna Mishra', 'ff213dd4@gmail.com', 'dd', 'dd', '$2a$10$TIIQKNmjObOqpzAGM0UuZuxmaFk.CmOL7p.D2L6JnuR4t6rYXWFtK', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:03:39', '2021-12-07 10:03:39'),
(17, 'Krishna Mishra', 'ff213dd4e@gmail.com', 'dd', 'dd', '$2a$10$G73NtQStV3yxa7MOLJ6GMuI50aU84nJChCmZHANDXuzhZLA1uzeZW', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:05:32', '2021-12-07 10:05:32'),
(18, 'Krishna Mishra', 'jjj@gmail.com', 'dd', 'dd', '$2a$10$wy6wiFoykI6lxCCFrchEOeGdy83AXITAESpuQ2EP.7gD4ZW5pBmQG', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:08:19', '2021-12-07 10:08:19'),
(19, 'Krishna Mishra', 'jjdj@gmail.com', 'dd', 'dd', '$2a$10$QgHnGHvFhWzIvjDHYk9nHO.aQONbtubY1qAdC4Rw3mpNrhoCsS1li', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:09:58', '2021-12-07 10:09:58'),
(20, 'Krishna Mishra', 'jjd3j@gmail.com', 'dd', 'dd', '$2a$10$aUAVhMt1fB6ShcX6HFprvuGjatQYhUT6j.yWPRLGHnob.c6Vjt8xS', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:19:28', '2021-12-07 10:19:28'),
(21, 'Krishna Mishra', 'jjd34j@gmail.com', 'dd', 'dd', '$2a$10$/.fGrUNYrVH0kVV3kLrLPumDOaxKPWSOOCVxMh4WzWTKI5Cimhdxi', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:21:20', '2021-12-07 10:21:20'),
(22, 'Krishna Mishra', 'jjd3f4j@gmail.com', 'dd', 'dd', '$2a$10$937uJx5tJlvhTa9UQcxaR.lpafXsoK60hSfoTEPmJBTL1pyaqW6Mi', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:24:11', '2021-12-07 10:24:11'),
(23, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$dlIG.G7LOZ.KrrJX2KHVDuADJWvW/CwtOUl67O7WudkH2KKvlWBjC', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 10:31:41', '2021-12-09 06:02:13'),
(24, 'Hillary', 'xajepunylo@mailinator.com', '29', 'Officia maxime iusto', '$2a$10$MHLDkDcMn5TQWVua33a7delnnGRFpS.sbQc1UMWtCL1ElUYNXD.h2', 4, 29, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 12:35:19', '2021-12-07 12:35:19'),
(25, 'MacKenzie Kala', 'niha@mailinator.com', '60', 'Veritatis id eveniet', '$2a$10$7UG8iF7YPXSq3pKJoaE4ted9TuYiVV8/LLJz7hu9CgvNrtsqT5nkm', 4, 29, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 12:37:28', '2021-12-07 12:37:28'),
(26, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$rE7L85fGxXoFMdvCEIK93e9Sp2hYhqPz1wlMeiD4ZVI9XfgLPGZ.G', 3, 3, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-07 13:20:20', '2021-12-09 06:02:18'),
(27, 'komal@gmail.com', 'Komal Mishra', '902657474', 'The Djamware', '$2a$10$EfHVcbTCgWZ9lC7DCtwNSudfc63LbEKxDkPDfdXg130F0Hd7QmMMe', 3, 3, NULL, NULL, NULL, 1, 1, 0, NULL, NULL, '2021-12-08 08:48:01', '2021-12-10 07:58:47'),
(28, 'Dominic Tech', 'samo@mailinator.com', '232323232', 'Quod possimus corru', '$2a$10$Q666bPrwJ4Dbe.rqyXk/zu5YJD.V5f83y4zyn2usUerHsWn9o5KwC', 1, 29, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-10 06:44:20', '2021-12-10 06:44:20'),
(29, 'Maite ttt', 'hatovude@mailinator.com', '73333333333', 'Officiis dolores asp', '$2a$10$mz5ilbN.Zasdmzj4Xr4GCe5CIy8/dQPs1i9zYcQkQOhxnlzA3vFrm', 6, 25, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2021-12-10 06:47:47', '2021-12-10 06:47:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
