
import React, { useState } from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoFileTrayStacked,
  IoSearchSharp,
  HiOutlineShare,
  IoStorefrontSharp,
  IoSearch,
  IoShareSocial
} from 'react-icons/io5';
import { ReactElement } from 'react';


import {
    Avatar,
    Box,
    Center,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';


//   const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//     return (
//       <Stack direction={'row'} align={'center'}>
//         <Flex
//           w={8}
//           h={8}
//           align={'center'}
//           justify={'center'}
//           rounded={'full'}
//           bg={iconBg}>
//           {icon}
//         </Flex>
//         <Text fontWeight={600}>{text}</Text>
//       </Stack>
//     );
//   };

export default function Home() {
  return (
    
    <div >
         <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Ikipiro - Catat harga jadi mudah.</title>
    <meta name="description" content="Aplikasi pencatatan harga untuk toko kelontong"/>
  <meta name="keywords" content="Toko, Harga, Ikipiro"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />

    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/LineIcons.2.0.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <link rel="stylesheet" href="assets/css/tiny-slider.css" />
    <link rel="stylesheet" href="assets/css/glightbox.min.css" />
    <link rel="stylesheet" href="assets/css/main.css" />


    <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <header class="header navbar-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="nav-inner">
        
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/logo/logo-ikipiro-white.png" alt="Logo"></img>
                            </a>
                            <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a href="#home" class="page-scroll active"
                                            aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#story" class="page-scroll"
                                            aria-label="Toggle navigation">Cerita Kami</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#features" class="page-scroll"
                                            aria-label="Toggle navigation">Fitur</a>
                                    </li>
                                    <li class="nav-item">
                                        <a  href="#overview"  class="page-scroll" aria-label="Toggle navigation">Pencapaian</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#download" class="page-scroll"
                                            aria-label="Toggle navigation">Download</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#team" class="page-scroll"
                                            aria-label="Toggle navigation">Tim</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a  href="javascript:void(0)" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                       
                                    </li> */}
                                </ul>
                            </div> 
                            <div class="button add-list-button">
                                <a target="_blank" href="https://testflight.apple.com/join/1ZG8iuAp"  class="btn">Get it now</a>
                            </div>
                        </nav>
          
                    </div>
                </div>
            </div>
        </div> 
    </header>

    <section id="home" class="hero-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 col-12">
                    <div class="hero-content">
                        <h1 class="wow fadeInLeft" data-wow-delay=".4s">Pakai Ikipiro Catat harga jadi mudah!</h1>
                        <p class="wow fadeInLeft" data-wow-delay=".6s">Mengelola dan berbagi daftar harga jadi lebih mudah dan efisien dengan Ikipiro</p>
                        <div class="button wow fadeInLeft" data-wow-delay=".8s">
                            <a target="_blank" href="https://testflight.apple.com/join/1ZG8iuAp" class="btn"><i class="lni lni-apple"></i> App Store</a>
                            {/* <a href="javascript:void(0)" class="btn btn-alt"><i class="lni lni-play-store"></i> Google
                                Play</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-12">
                    <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
                        <img src="assets/images/hero/app-5.png" alt="#"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section id="story">
<div class="single-table wow fadeInUp" data-wow-delay=".2s">
<Container maxW={'6xl'} py={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'xl'}
            boxShadow={'2xl'}
            alt={'feature image'}
            src={
              'assets/images/hero/toko.jpeg'            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'gray.800'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('gray.50', 'gray.50')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Dibalik Ikipiro
          </Text>
          <Heading fontSize={'2xl'} textAlign={"justify"}>Rata-rata toko kelontong menjual lebih dari 100 jenis produk</Heading>
          <Text textAlign={"justify"} color={'gray.500'} fontSize={'md'}>
        Bayangkan pemilik atau penjaga toko harus menghafalkan semua harga produk di toko mereka, dan jika tidak tau saat ada yang membeli, sang pembeli harus menunggu sang penjaga toko untuk mencari tau harganya, untuk itu kami ada untuk membantu mengatasi masalah tersebut!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.300', 'gray.300')}
              />
            }>
    <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.100')}>
          {<Icon as={IoFileTrayStacked} color={'gray.500'} w={5} h={5} />}
        </Flex>
        <Text fontWeight={600}>{"Pendataan Produk"}</Text>
      </Stack>
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.100')}>
          {<Icon as={IoSearch} color={'gray.500'} w={5} h={5} />}
        </Flex>
        <Text fontWeight={600}>{"Pencarian Produk"}</Text>
      </Stack>
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.100')}>
          {<Icon as={IoStorefrontSharp} color={'gray.500'} w={5} h={5} />}
        </Flex>
        <Text fontWeight={600}>{"Manage Lebih dari satu toko"}</Text>
      </Stack>
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.100')}>
          {<Icon as={IoShareSocial} color={'gray.500'} w={5} h={5} />}
        </Flex>
        <Text fontWeight={600}>{"Sikronisasi harga dengan penjaga toko"}</Text>
      </Stack>
            {/* <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            /> */}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
    </div>
</section>

  
    <section id="features" class="features section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h3 class="wow zoomIn" data-wow-delay=".2s">Dengan Berbagai Fitur</h3>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Semakin banyak produk anda, semakin terasa mudah dan efisien.
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s">Dengan Ikipiro, kamu bisa dengan mudah mengelola harga di toko kamu. Dengan dukungan iCloud, kamu bisa berbagi data antar device dan admin dengan lebih cepat dan efisien sehingga membuat kegiatan bisnis kamu jadi lebih produktif.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
    
                    <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <i class="lni lni-search"></i>
                        <h3>Pencarian Cepat dan Instan</h3>
                        <p>Pakai Barcode, harga dan detail produk dapat dilihat dalam hitungan detik. Dengan keyword, kamu bisa filter dan mencari spesifik produk</p>
                    </div>
            
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    
                    <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                        <i class="lni lni-money-location"></i>
                        <h3>Input Produk dan Harga</h3>
                        <p>Dengan autocomplete, kamu tidak perlu menambahkan semua informasi secara manual. Kolom isian yang compact, kamu tidak perlu khawatir kerepotan</p>
                    </div>
                 
                </div>
                <div class="col-lg-6 col-md-6 col-12">

                    <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                        <i class="lni lni-apartment"></i>
                        <h3>Multi Toko</h3>
                        <p>Atur dan buat toko sebanyak yang kamu mau. Akses dan pindah toko dengan mudah hanya dengan satu kali klik</p>
                    </div>

                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  
                    <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <i class="lni lni-users"></i>
                        <h3>Sinkronisasi Data & Multi Admin</h3>
                        <p>Berbagi dan sinkronisasi data untuk banyak admin dan device yang tersedia. Dengan iCloud, proses sinkronisasi jauh lebih cepat</p>
                    </div>
                 
                </div>
                {/* <div class="col-lg-4 col-md-6 col-12">
                 
                    <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                        <i class="lni lni-cog"></i>
                        <h3>Powerful API</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                
                </div> */}
                {/* <div class="col-lg-4 col-md-6 col-12">
                  
                    <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                        <i class="lni lni-layers"></i>
                        <h3>Database Backups</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page at its layout.</p>
                    </div>
                  
                </div> */}
            </div>
        </div>
    </section>

    <section id="overview" class="our-achievement section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
                    <div class="title">
                        <h2>Dipercaya oleh lebih dari 0 pemilik toko</h2>
                        <p>Kami membantu mereka dengan mudahnya mengatur dan membagikan daftar harga produk mereka.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="single-achievement wow fadeInUp" data-wow-delay=".2s">
                                <h3 class="counter"><span id="secondo1" class="countup" cup-end="100">0</span>%</h3>
                                <p>satisfaction</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                <h3 class="counter"><span id="secondo2" class="countup" cup-end="120">0</span></h3>
                                <p>Happy Users</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                <h3 class="counter"><span id="secondo3" class="countup" cup-end="125">0</span>+</h3>
                                <p>Downloads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <section>
        <div class="container">
            <div class="row">
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
                </div>
        </div>
    </section> */}
  
    <section id="download" class="pricing-table section">
  <div class="container display-flex">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 col-12">
                    <div class="hero-content">
                        <h3 class="wow fadeInLeft" data-wow-delay=".4s">Ikipiro segera tersedia di app store</h3>
                        <p class="wow fadeInLeft mt-3" data-wow-delay=".6s">Saat ini ikipiro baru bisa anda coba dengan testflight, nantikan kami ya!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="hero-image wow fadeInRight mt-3" data-wow-delay=".4s">
                        <img src="assets/images/hero/app-7.png" alt="#"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section class="section call-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
                    <div class="cta-content">
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Ayo coba aplikasi Ikipiro!
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".4s">Aplikasi Ikipiro tersedia untuk di coba dengan Test Flight pada iOS.</p>
                        <div class="button wow fadeInUp" data-wow-delay=".6s">
                            <a target="_blank" href="https://testflight.apple.com/join/1ZG8iuAp" class="btn">Coba Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section id="team" class="section">
        <div class="container">
        <div class="row">
        <div class="single-table wow fadeInUp" data-wow-delay=".2s">
                <div class="col-12">
                    <div class="section-title">
                        {/* <h3 class="wow zoomIn" data-wow-delay=".2s">pricing</h3> */}
                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Tentang Kami</h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s">Kami bekerja keras untuk memberikan solusi yang terbaik bagi para pelaku usaha UMKM toko dan warung di Indonesia.</p>
                    </div>
                </div>
</div>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center">
            <div class="single-table wow fadeInUp" data-wow-delay=".2s">
            <div class="row">
  
            {/* <div class="col-lg-3 col-md-6 col-12"> */}
    <Center  >
      <Box
        maxW={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          w={200}
          h={200}
          src={
            'assets/images/hero/Reza.png'
          }
          alt={'Avatar Alt'}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}  color={useColorModeValue('gray.700', 'gray.400')}>
          Reza Fariq Almondra
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @rezzafariq
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
           Seorang Project Manager, designer dan researcher di Ikipiro,serta seorang HR di perusahan di batam.
          {/* Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts */}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #PM
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Designer
          </Badge>
          {/* <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge> */}
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
                      <Link href={"https://www.instagram.com/rezzafariq/"}  isExternal>
            Follow
            </Link>
          </Button>
          <Button

            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
                <Link href={"https://www.linkedin.com/in/rezzafariq/"}  isExternal>
            Connect
            </Link>
          </Button>
        </Stack>
      </Box>
                 </Center>


                {/* </div> */}
            </div>
            </div>
            </div>

            <div class="single-table wow fadeInUp" data-wow-delay=".2s">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                <Center py={6}>
      <Box
        // maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
        w={200}
        h={200}
          src={
            'assets/images/hero/Valdo.png'
          }
          alt={'Avatar Alt'}
          pos={'relative'}
  
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}    color={useColorModeValue('gray.700', 'gray.400')}>
          Rivaldo Fernandes
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @rivaldofez
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
           Seorang Coder dan Researcher di Ikipiro, Rivaldo juga merupakan seorang AI Mentor.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Coder
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #SwiftUI
          </Badge>

        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
                         	<Link href={"https://www.instagram.com/rivaldofez"}  isExternal>
            Follow
            </Link>

       
          </Button>
          
          <Button
            
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
                	<Link href={"https://www.linkedin.com/in/rivaldofez"}  isExternal>
            Connect
            </Link>
          </Button>
        </Stack>
      </Box>
                 </Center>
                </div>

                <div class="col-lg-3 col-md-6 col-12">
                <Center py={6}>
      <Box
        // maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
        w={200}
        h={200}
          src={
            'assets/images/hero/Vinca.png' }
          alt={'Avatar Alt'}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'}  fontFamily={'body'} color={useColorModeValue('gray.700', 'gray.400')}>
        Jovinca Claudia A
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @vincalaudia
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
           Seorang Illustrator, UI/UX Designer, designer dan researcher di Ikipiro.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #UI/UX
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
             <Link href={"https://www.instagram.com/vincalaudia/"} isExternal>
            Follow
            </Link>
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
                <Link href={"https://www.linkedin.com/in/jovincaclaudia/"} isExternal>
            Connect
            </Link>
          </Button>
        </Stack>
      </Box>
                 </Center>
                </div>

                <div class="col-lg-3 col-md-6 col-12">
                <Center py={6}>
      <Box
        // maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
        w={200}
        h={200}
          src={
            'assets/images/hero/Alli.png' }
          alt={'Avatar Alt'}
        />
          <Heading fontSize={'2xl'}  fontFamily={'body'} color={useColorModeValue('gray.700', 'gray.400')}>
         Allisya Defania
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @allydfnia
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
           Seorang UI/UX Designer, designer, video editor dan researcher di Ikipiro.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Designer
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #UI/UX
          </Badge>

        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
                <Link href={"https://www.instagram.com/allydfnia/"} isExternal>
            Follow
            </Link>
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
                              <Link href={"https://www.linkedin.com/in/allissyadefania/"} isExternal>
            Connect
            </Link>
          </Button>
        </Stack>
      </Box>
                 </Center>
                </div>

                <div class="col-lg-3 col-md-6 col-12">
                <Center py={6}>
      <Box
        // maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
        w={200}
        h={200}
       src={
         'assets/images/hero/Faqqih.png' }
          alt={'Avatar Alt'}
   
        />
     <Heading fontSize={'2xl'}  fontFamily={'body'} color={useColorModeValue('gray.700', 'gray.400')}>
          M Nur Faqqih
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @mnfaqqih
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
  Seorang Coder, dan researcher di Ikipiro, Faqqih juga tertarik di bidang Backend.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Coder
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #SwiftUI
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Follow
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Connect
          </Button>
        </Stack>
      </Box>
                 </Center>
                </div>
            </div>
            </div>

        </div>
    </section>


    <footer class="footer">
      
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                       
                        <div class="single-footer f-about">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-ikipiro.png" alt="#"></img>
                                </a>
                            </div>
                            <p>Membantu UMKM toko dan warung di Indonesia dalam mengelola daftar harga.</p>
                            <ul class="social">
                                <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-youtube"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-pinterest"></i></a></li>
                            </ul>
                            <p class="copyright-text">Designed and Developed by <a href="#"
                                    rel="noConnect" target="_blank">Ikipiro</a>
                            </p>
                        </div>
                      
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-12">
                              
                                <div class="single-footer f-link">
                                    <h3>Solutions</h3>
                                    <ul>
                                        <li><a href="javascript:void(0)">Marketing</a></li>
                                        <li><a href="javascript:void(0)">Analytics</a></li>
                                        <li><a href="javascript:void(0)">Commerce</a></li>
                                        <li><a href="javascript:void(0)">Insights</a></li>
                                        <li><a href="javascript:void(0)">Promotion</a></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                        
                                <div class="single-footer f-link">
                                    <h3>Support</h3>
                                    <ul>
                                        <li><a href="javascript:void(0)">Bug</a></li>
                                        <li><a href="javascript:void(0)">Documentation</a></li>
                                        <li><a href="javascript:void(0)">Guides</a></li>
                                        <li><a href="javascript:void(0)">API Status</a></li>
                                        <li><a href="javascript:void(0)">Live Support</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
              
                                <div class="single-footer f-link">
                                    <h3>Company</h3>
                                    <ul>
                                        <li><a href="javascript:void(0)">About Us</a></li>
                                        <li><a href="javascript:void(0)">Our Blog</a></li>
                                        <li><a href="javascript:void(0)">Jobs</a></li>
                                        <li><a href="javascript:void(0)">Press</a></li>
                                        <li><a href="javascript:void(0)">Contact Us</a></li>
                                    </ul>
                                </div>
                              
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
        
                                <div class="single-footer f-link">
                                    <h3>Legal</h3>
                                    <ul>
                                        <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0)">Develoment Services</a></li>
                                        <li><a href="javascript:void(0)">Customer Relations</a></li>
                                        <li><a href="javascript:void(0)">Innovation</a></li>
                                    </ul>
                                </div>
               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </footer>


  
    <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
    </a>

   
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/tiny-slider.js"></script>
    <script src="assets/js/glightbox.min.js"></script>
    <script src="assets/js/count-up.min.js"></script>
    <script src="assets/js/main.js"></script>
    {/* <script type="text/javascript">
        var cu = new counterUp({
            start: 0,
            duration: 2000,
            intvalues: true,
            interval: 100,
            append: " ",
        });
        cu.start();
    </script>  */}
    </div>
  )
}
