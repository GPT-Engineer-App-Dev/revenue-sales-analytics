import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} width="full">
          <StatCard title="Sales" value="1,200" icon={<FaShoppingCart />} change={5.4} changeType="increase" description="Since last month" />
          <StatCard title="Revenue" value="$34,000" icon={<FaDollarSign />} change={2.1} changeType="increase" description="Since last month" />
          <StatCard title="Customers" value="300" icon={<FaUsers />} change={-1.2} changeType="decrease" description="Since last month" />
          <StatCard title="Growth" value="15%" icon={<FaChartLine />} change={3.8} changeType="increase" description="Since last month" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, value, icon, change, changeType, description }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="full">
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={icon} size="lg" isRound />
        <VStack align="start">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber>{value}</StatNumber>
            <StatHelpText>
              <StatArrow type={changeType} />
              {change}% {description}
            </StatHelpText>
          </Stat>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
