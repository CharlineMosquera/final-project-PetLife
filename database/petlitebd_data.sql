-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2024 a las 06:00:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petlitebd`
--

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Comida'),
(2, 'Higiene'),
(3, 'Suplementos'),
(4, 'Salud'),
(5, 'Caja de subscripción');

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre_cliente`, `apellido_cliente`, `direccion`, `telefono`, `email`) VALUES
(1, 'Maria Jose', 'Malaver', 'Carrera 68 Norte', '3001008090', 'majo@gmail.com'),
(2, 'Leydy Tatiana', 'Tarazona', 'Calle 100', '3205001010', 'tatis@gmail.com'),
(3, 'Sergio', 'Fontalvo', 'Calle 30', '3104402020', 'sergio@gmail.com'),
(4, 'Charline', 'Mosquera', 'Calle 6', '3503005050', 'char@gmail.com');

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id_mascota`, `nombre_mascota`, `raza`, `id_cliente`) VALUES
(1, 'Sirius', 'Pointer Ingles', 2),
(2, 'Yogui', 'Pastor Alemán', 3),
(3, 'Marley', 'Mestizo', 4);

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_orden`, `fecha`, `total`, `id_cliente`) VALUES
(1, '2024-10-01', 228000.00, 4),
(2, '2024-10-11', 388000.00, 2),
(3, '2024-10-08', 299900.00, 1),
(4, '2024-10-12', 349000.00, 3);

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `precio`, `disponibilidad`, `descripcion`, `id_categoria`) VALUES
(1, 'Br For Dog - Pure Puppy Lamb', 30940.00, 0, 'Alimento balanceado que tiene como ingredientes cordero, harina de arroz integral, hojuelas de papas secas, semilla de linaza, pulpa de remolacha, harina de algarrobo, vitaminas, minerales, frutas y extractos de plantas', 1),
(2, 'Arquivet Fresh Free Run Turkey', 204736.00, 0, 'Alimento completo semihúmedo para todo tipo de perros adultos, con un 55% de pavo fresco, un 20% de pescado fresco y un 25% de vegetales, frutas y hierbas medicinales. Prensado en frío, no extruido, procesamiento mínimo. Sin gluten, sin harinas cárnicas, sin colorantes ni aromatizantes artificiales. Cocinado lentamente y a baja temperatura', 1),
(3, 'Hill’s Science Diet Adult 7+', 95900.00, 0, 'Alimento específicamente formulado para ayudar a los perros de 7 años o más a mantenerse sanos a medida que envejecen. Desarrollado por científicos y nutriólogos de Hill’s, este alimento para perros de 7 años o más está hecho con ingredientes naturales más vitaminas, minerales y aminoácidos, y no contiene colores, sabores o conservadores artificiales. También proporciona una mezcla de antioxidantes clínicamente comprobada para favorecer un sistema inmunológico sano', 1),
(4, 'Alimento Húmedo en Lata para Perros Royal Canin Gastro Intestinal', 28600.00, 0, 'Alimento especialmente formulado para perros con dificultades al digerir grasa. Has probado de todo para ayudar a tu perro con sus problemas gastrointestinales, sean vomito, diarrea, o falta de apetito. Y aunque las dietas caseras blandas son utilizadas frecuentemente para trastornos digestivos, tu peludo puede estar perdiendo algunos nutrientes fundamentales para su total recuperación', 1),
(5, 'Oven Baked Tradition Semi Humedo Adulto All Breed Chicken', 25990.00, 0, 'Alimento semi húmedo para perros adultos de todas las razas en base a pollo', 1),
(6, 'Dog\'s Natural Care - Jabón Origen Spa Herbal', 18700.00, 0, 'Ideal para minimizar impurezas y usar en pieles expuestas a cambios de ambiente, para mascotas aventureras que se exponen a microorganismos y ectoparásitos. Sus aceites ayudan a dar vitalidad y brillo al pelaje', 2),
(7, 'Petys - Paños Húmedos Anti Bacterial Con Clorhexidina', 11000.00, 0, 'Paños húmedos petys anti bacterial con clorhexidina - 40 unidades, Hipo alergénicos. dejan una agradable fragancia en la mascota, los deja listos para disfrutar de su día, limpiándolos para eliminar la suciedad y el mal olor que pueden adquirir entre baño y baño, ideal para ser manipulado por humanos', 2),
(8, 'Omega 3 para Perros', 19990.00, 0, 'Suplemento rico en ácidos grasos esenciales para mejorar la salud de la piel y el pelaje', 3),
(9, 'Multivitamínico Completo', 24990.00, 0, 'Un suplemento diario con vitaminas y minerales esenciales para mantener a tu perro activo y saludable', 3),
(10, 'Glucosamina para Articulaciones', 29990.00, 0, 'Suplemento que ayuda a mejorar la movilidad y a fortalecer las articulaciones de perros mayores o activos', 4),
(11, 'Caja Junior Saludable', 170000.00, 0, 'Caja personalizada para cachorros en crecimiento, que incluye alimentos ricos en nutrientes para apoyar el desarrollo, suplementos vitamínicos para fortalecer el sistema inmunológico y productos de aseo para pieles delicadas', 5),
(12, 'Caja Senior Vitalidad', 200000.00, 0, 'Esta caja está diseñada para perros mayores. Contiene alimentos altos en fibra, suplementos para las articulaciones, y productos de bienestar como cepillos suaves para pelajes maduros', 5),
(13, 'Caja Perrito Sensible', 130000.00, 0, 'Productos especializados para el cuidado del pelaje, incluyendo cepillos suaves, toallitas antibacteriales, y shampoo especializado para problemas de piel sensibles', 5),
(14, 'Caja Energía Activa', 190000.00, 0, 'Esta caja es ideal para perros enérgicos. Contiene alimentos ricos en proteínas y grasas saludables, además de suplementos para mantener la energía y productos de aseo para un pelaje brillante', 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
