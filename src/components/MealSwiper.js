import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Scrollbar,
  Navigation,
  Lazy,
  EffectFlip,
} from 'swiper';
import PropTypes from 'prop-types';
import {
  HStack,
  Box,
  Heading,
} from '@chakra-ui/react';
import { FaHeart, FaHome } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/lazy/lazy.scss';
import 'swiper/components/effect-flip/effect-flip.scss';

SwiperCore.use([EffectFlip, Scrollbar, Lazy, Navigation]);

const MealSwiper = ({ props }) => {
  const { match: { params: { category: currentCategoryURL } } } = props;
  const { mealByCategory: { byCategory: { [currentCategoryURL]: arrayOfMeals } } } = props;
  const swiperRef = useRef(null);
  const next = (e) => {
    if (swiperRef) {
      swiperRef.current.swiper.navigation.onNextClick(e);
    }
  };
  return (
    <Swiper
      ref={swiperRef}
      effect="flip"
      spaceBetween={10}
      observer
      observeParents
      slidesPerView={1}
      lazy
      preloadImages={false}
    >
      {
        arrayOfMeals.map((meal) => (
          <SwiperSlide key={meal.idMeal}>
            <Box
              minHeight="65vh"
              position="relative"
              data-background={meal.strMealThumb}
              alt={meal.strMeal}
              className="swiper-lazy"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderTopRadius="5%"
              boxShadow={{ lg: 'lg' }}
            >
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
              <Box backgroundColor="rgb(96,135,135,0.9)" position="absolute" bottom="5%" w="100%" p={[2, 4, 6, 8]}>
                <Heading size="lg" fontFamily="'Advent Pro', sans-serif;" textAlign="end">
                  {`${meal.strMeal}`}
                </Heading>
              </Box>
            </Box>
            <HStack
              spacing={1}
              display={{ base: 'flex' }}
              justifyContent="space-between"
              backgroundColor="rgb(231,102,102)"
              height="15vh"
              px={{ base: 6, lg: 12 }}
              py={2}
              borderBottomRadius="20px"
              boxShadow={{ lg: 'md' }}
            >
              <Box onClick={(e) => next(e)} boxShadow="dark-lg" p="3" rounded="100%" bg="white" transition="all .2s ease-in-out" cursor="pointer" _hover={{ transform: 'scale(1.2)' }}>
                <ImCross fontSize="30px" color="rgb(253,107,107)" />
              </Box>
              <Box alignSelf="flex-end" boxShadow="md" p="2" rounded="100%" bg="white" as={Link} transition="all .2s ease-in-out" to="/" _hover={{ transform: 'scale(1.2)' }}>
                <FaHome fontSize="20px" color="rgb(46,178,201)" />
              </Box>
              <Box as={Link} to={`/recipes/${meal.idMeal}`} boxShadow="dark-lg" p="3" rounded="100%" bg="white" cursor="pointer" transition="all .2s ease-in-out" _hover={{ transform: 'scale(1.2)' }}>
                <FaHeart fontSize="30px" color="rgb(78,203,147)" />
              </Box>
            </HStack>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

MealSwiper.defaultProps = {
  mealByCategory: {},
  match: {},
};

MealSwiper.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  mealByCategory: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

export default MealSwiper;
