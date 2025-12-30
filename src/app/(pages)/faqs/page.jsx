"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  Flex,
  Icon,
} from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";

import {
  IoChevronDownOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function FAQsPage() {
  const faqs = [
    {
      question: "How do I donate to a campaign?",
      answer:
        'You can donate by clicking the "Donate Now" button on any campaign page. We accept various payment methods including credit/debit cards, UPI, and net banking. All transactions are secure and encrypted.',
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, donations made to Nand Care Foundation are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive a tax exemption certificate via email after your donation.",
    },
    {
      question: "How can I track where my donation is being used?",
      answer:
        "We maintain complete transparency. After donating, you will receive regular updates via email about the campaign progress. You can also visit the campaign page to see real-time updates and impact reports.",
    },
    {
      question: "Can I volunteer with Nand Care Foundation?",
      answer:
        "Absolutely! We welcome volunteers who are passionate about making a difference. You can register as a volunteer through our website, and our team will contact you with opportunities that match your interests and skills.",
    },
    {
      question: "What is the minimum donation amount?",
      answer:
        "There is no minimum donation amount. Every contribution, no matter how small, makes a difference and helps us serve those in need. You can donate any amount you feel comfortable with.",
    },
    {
      question: "How do you ensure transparency in fund utilization?",
      answer:
        "We publish detailed reports on fund utilization for every campaign. Our operations undergo regular audits, and we maintain 100% transparency through our financial statements, which are available on our website.",
    },
    {
      question: "Can I start my own campaign?",
      answer:
        "Yes, individuals and organizations can start campaigns on our platform. You need to submit a proposal with details about the cause, beneficiaries, and required funds. Our team will review and verify before publishing.",
    },
    {
      question: "How long does it take to process refunds?",
      answer:
        "If you need a refund, please contact our support team within 7 days of donation. Refunds are processed within 7-10 business days, depending on your bank or payment method.",
    },
    {
      question: "Do you provide donation receipts?",
      answer:
        "Yes, you will receive an automatic donation receipt via email immediately after your transaction is completed. This receipt includes all necessary details for tax purposes.",
    },
    {
      question: "How can I contact Nand Care Foundation?",
      answer:
        "You can reach us via email at info@nandcare.org, call us at +91 (800) 123-4567, or use the contact form on our website. Our support team is available Monday to Friday, 9 AM to 6 PM IST.",
    },
  ];

  return (
    <PageLayout transparentHeader={false}>
      <Box pt="var(--header-height)">
        {/* Hero Section with Animation */}
        <MotionBox
          bg="tertiary.200"
          py={{ base: 16, md: 20 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
            textAlign="center"
          >
            <MotionBox
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* <Flex justify="center" mb={4}>
                <Box
                  bg="white"
                  p={4}
                  borderRadius="full"
                  boxShadow="lg"
                  display="inline-flex"
                >
                  <Icon
                    as={IoHelpCircleOutline}
                    boxSize={10}
                    color="primary.500"
                  />
                </Box>
              </Flex> */}
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="gray.900"
                mb={4}
              >
                Frequently Asked Questions
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.700"
                maxW="700px"
                mx="auto"
              >
                Find answers to common questions about donations, campaigns, and
                our services.
              </Text>
            </MotionBox>
          </Container>
        </MotionBox>

        {/* FAQs with Stagger Animation */}
        <Box py={{ base: 12, md: 16, lg: 20 }}>
          <Container maxW="900px" px={{ base: 6, md: 8, lg: 12 }}>
            <Accordion.Root collapsible multiple>
              <MotionVStack
                gap={4}
                align="stretch"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {faqs.map((faq, index) => (
                  <MotionBox
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Accordion.Item
                      value={`faq-${index}`}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      overflow="hidden"
                      style={{ willChange: "transform" }}
                    >
                      <Accordion.ItemTrigger
                        p={6}
                        cursor="pointer"
                        bg="gray.100"
                        _hover={{ bg: "gray.200" }}
                        transition="all 0.2s"
                      >
                        <Box flex="1" textAlign="left">
                          <Text fontSize="lg" fontWeight="600" color="gray.900">
                            {faq.question}
                          </Text>
                        </Box>
                        <Accordion.ItemIndicator>
                          <IoChevronDownOutline />
                        </Accordion.ItemIndicator>
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Box px={6} pb={6}>
                          <Text fontSize="md" color="gray.700" lineHeight="1.8">
                            {faq.answer}
                          </Text>
                        </Box>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  </MotionBox>
                ))}
              </MotionVStack>
            </Accordion.Root>
          </Container>
        </Box>

        {/* Still Have Questions with Animation */}
        <MotionBox
          bg="primary.50"
          py={{ base: 12, md: 16 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <VStack textAlign="center" gap={4}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="gray.900"
              >
                Still Have Questions?
              </Heading>
              <Text fontSize="md" color="gray.700" maxW="600px">
                Can't find the answer you're looking for? Our support team is
                here to help.
              </Text>
              <VStack gap={2} mt={2}>
                <MotionBox
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flex align="center" gap={2}>
                    <Icon as={IoMailOutline} boxSize={5} color="gray.700" />
                    <Text
                      fontSize="md"
                      color="gray.800"
                      fontWeight="600"
                      as="a"
                      href="mailto:info@nandcare.org"
                      _hover={{ color: "primary.500" }}
                      transition="color 0.2s"
                    >
                      info@nandcare.org
                    </Text>
                  </Flex>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flex align="center" gap={2}>
                    <Icon
                      as={IoPhonePortraitOutline}
                      boxSize={5}
                      color="gray.700"
                    />
                    <Text
                      fontSize="md"
                      color="gray.800"
                      fontWeight="600"
                      as="a"
                      href="tel:+918001234567"
                      _hover={{ color: "primary.500" }}
                      transition="color 0.2s"
                    >
                      +91 (800) 123-4567
                    </Text>
                  </Flex>
                </MotionBox>
              </VStack>
            </VStack>
          </Container>
        </MotionBox>
      </Box>
    </PageLayout>
  );
}
