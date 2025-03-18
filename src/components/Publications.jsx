import { Box, VStack, Text } from "@chakra-ui/react";

const publications = {
  "2024": [
    "Detecting Sybil Attacks in VANET: Exploring Feature Diversity and Deep Learning Algorithms with Insights into Sybil Node Associations",
    "Intelligent defense strategies: Comprehensive attack detection in VANET with deep reinforcement learning",
    "An integrated deep learning model for Ethereum smart contract vulnerability detection",
  ],
  "2023": [
    "Lav Upadhyay, Meenakshi Tripathi, Feature Selection Based Evaluation for Network Intrusion Detection System with Machine Learning Methods on CICIDS-2017, 5th International Conference on Communication and Intelligent Systems (ICCIS 2023), MNIT Jaipur 16-17 December 2023",
    "Shashvat Sharma, Meenakshi Tripathi, Harish Kumar Sahu and Ashish Karan, A Post-Quantum End-to-End Encryption Protocol, International Conference on Advanced Networks and Telecommunications Systems (ANTS-2023), MNIT Jaipur 17-20 December 2023",
    "Rishank Goyal, Meenakshi Tripathi, Shubham Tomar, GasOptiScan: Unveiling Gas-Inefficient Smart Contracts via Loop Fusible Pattern Detection for Enhanced Cost Efficiency, International Conference on Emerging Trends in Networks and Computer Communications (ETNCC-2023), 10.1109/ETNCC59188.2023.10284938",
    "Rajat Shri Shrimal, Jyoti Gajrani, Vinesh Kumar Jain, Meenakshi Tripathi, Dharm Singh Jat, Detection of Ransomware Attacks Using Weight of Evidence Technique, International Conference on Emerging Trends in Networks and Computer Communications (ETNCC-2023), 10.1109/ETNCC59188.2023.10284928",
    "Vikas Kumar Jain, Meenakshi Tripathi, Multi-Objective Approach for Detecting Vulnerabilities in Ethereum Smart Contracts, International Conference on Emerging Trends in Networks and Computer Communications (ETNCC-2023), 10.1109/ETNCC59188.2023.10284955",
    "Vikas Kumar Jain, Meenakshi Tripathi, An integrated deep learning model for Ethereum smart contract vulnerability detection, International Journal of Information Security, pg. 1-19, 2023",
    "Akhil Pariyarth, Shubham Tomar, Meenakshi Tripathi. Efficient Privacy-Preserving Authentication using Blockchain for VANET, 16th International Conference on COMmunication Systems & NETworkS (COMSNET-2023), 423-426, IEEE",
    "Meenakshi Tripathi, Shadab Khan and Sangharatna Godboley: Comparison between Performance of Constraint Solver for Prediction Model in Symbolic Execution, International Conference on Artificial Intelligence of Things (ICAIoT)-2023",
  ],
  "2022": [
    "Kawaldeep Kaur, Shubham Tomar, Meenakshi Tripathi. Gas Fee Reduction by Detecting Loop Fusible Patterns in Ethereum Smart Contract, 16th IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
    "R. Sultana, J Grover, M Tripathi: A Data-Centric and Dynamic-Range based Misbehavior Detection Approach for VANET, TENCON-2022",
    "S. K Gupta, M Tripathi, J Grover: Hybrid optimization and deep learning based intrusion detection system, Computers and Electrical Engineering 100, 107876",
    "Sunil Kumar, Jyoti Gajrani and Meenakshi Tripathi: Fuzzing REST APIs for Bugs: An Empirical Analysis, FICTA-2022",
    "R. Sultana, J Grover, J Meghwal, M Tripathi: Exploiting machine learning and deep learning models for misbehavior detection in VANET, Journal of Information Security and Applications, 1-15",
    "A Gupta, M Tripathi, S Muhuri, G Singal, N Kumar: A secure and lightweight anonymous mutual authentication scheme for wearable devices in Medical Internet of Things, Journal of Information Security and Applications 68, 103259",
  ],
  "2021": [
    "Rukhsar Sultana, Jyoti Grover, Meenakshi Tripathi: Security of SDN-based vehicular ad hoc networks: State-of-the-art and challenges. Vehicular communications, 27: 100284 (2021)",
    "Shalin Deval, Meenakshi Tripathi, Bruhadeshwar Bezawada: X-Phish: Days of Future Past: Adaptive & Privacy Preserving Phishing Detection. Presented in IEEE CNS, 2021",
    "Subham Kumar Gupta, Meenakshi Tripathi, Jyoti Grover: Towards an Effective Intrusion Detection System using Machine Learning techniques: Comprehensive Analysis and Review. Presented in 9th International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions) (ICRITO)",
    "Leveraging LSTM-RNN combined with SVM for Network Intrusion Detection",
    "Comparative Study of Object Recognition Algorithms for Effective Electronic Travel Aids",
  ],
};

const Publications = () => {
  return (
    <Box p={6} maxW="900px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4} color={"black"}>
        List of Publications
      </Text>
      <VStack align="start" spacing={5}>
        {Object.entries(publications)
          .sort(([yearA], [yearB]) => yearB.localeCompare(yearA)) // Years को descending order में sort कर रहे हैं
          .map(([year, papers]) => (
            <Box key={year} w="100%">
              <Text fontSize="xl" fontWeight="bold" color="blue.700" mb={2}>
                {year}
              </Text>
              <VStack align="start" pl={6} spacing={2}>
                {papers.map((paper, index) => (
                  <Text key={index} fontSize="md" color="gray.700">
                    • {paper}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}
      </VStack>
    </Box>
  );
};

export default Publications;
