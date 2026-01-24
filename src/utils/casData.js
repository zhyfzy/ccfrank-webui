// 中科院分区数据映射
// 根据《2025年中国科学院文献情报中心期刊分区表升级版》整理
// 注意：中科院分区主要针对期刊（Journal），不包括会议
// 数据来源：附件2-2025年中国科学院文献情报中心期刊分区表升级版(小类学科）.csv
// 匹配日期：2026-01-24
// 匹配数量：272个期刊（1区:29, 2区:59, 3区:76, 4区:108）
// 注：包含使用fullName作为key的无缩写期刊

export const casMapping = {
'AEI': '1',  // Advanced Engineering Informatics
'DSE': '1',  // Data Science and Engineering
'DSS': '1',  // Decision Support Systems
  'IEEE Transactions on Cybernetics': '1',  // (CCF B类)
'JSAC': '1',  // IEEE Journal on Selected Areas in Communications
  'JSIS': '1',  // (CCF C类)
  'Medical Image Analysis': '1',  // (CCF C类)
'PACM PL': '1',  // Proceedings of the ACM on Programming Languages (CSV: PACMPL)
'PR': '1',  // Pattern Recognition
'Proc. IEEE': '1',  // Proceedings of the IEEE
'SCIS': '1',  // Science China Information Sciences
'TCSVT': '1',  // IEEE Transactions on Circuits and Systems for Video Technology
'TEC': '1',  // IEEE Transactions on Evolutionary Computation
'TFS': '1',  // IEEE Transactions on Fuzzy Systems
'TIFS': '1',  // IEEE Transactions on Information Forensics and Security
'TII': '1',  // IEEE Transactions on Industrial Informatics
'IPM': '1',  // Information Processing and Management (INFORMATION PROCESSING & MANAGEMENT)
'TIP': '1',  // IEEE Transactions on Image Processing
'TMC': '1',  // IEEE Transactions on Mobile Computing
'TMI': '1',  // IEEE Transactions on Medical Imaging
'TMM': '1',  // IEEE Transactions on Multimedia
'TOG': '1',  // ACM Transactions on Graphics
'TOIS': '1',  // ACM Transactions on Information Systems
'TOSEM': '1',  // ACM Transactions on Software Engineering and Methodology
'TSMC': '1',  // IEEE Transactions on Systems, Man, and Cybernetics: Systems (IEEE Transactions on Systems Man Cybernetics-Systems)
'TPAMI': '1',  // IEEE Transactions on Pattern Analysis and Machine Intelligence
'TSE': '1',  // IEEE Transactions on Software Engineering
'TVCG': '1',  // IEEE Transactions on Visualization and Computer Graphics
'TWC': '1',  // IEEE Transactions on Wireless Communications
'AI': '2',  // Artificial Intelligence
'AIM': '2',  // Artificial Intelligence in Medicine
  'Briefings in Bioinformatics': '2',  // (CCF B类)
'CVM': '2',  // Computational Visual Media
'CVMJ': '2',  // Computational Visual Media
'Cognition': '2',  // Cognition
'Computers & Security': '2',  // COMPUTERS & SECURITY (无缩写)
'EAAI': '2',  // Engineering Applications of Artificial Intelligence
'ESE': '2',  // Empirical Software Engineering
'ESWA': '2',  // Expert Systems with Applications
'FCS': '2',  // Frontiers of Computer Science
'FGCS': '2',  // Future Generation Computer Systems (Future Generation Computer Systems-The International Journal of eScience)
  'Fuzzy Sets and Systems': '2',  // (CCF C类)
'HCI': '2',  // Human-Computer Interaction
'I&M': '2',  // Information & Management
  'IEEE Transactions on Reliability': '2',  // (CCF C类)
'IJCV': '2',  // International Journal of Computer Vision
'IJGIS': '2',  // International Journal of Geographical Information Science
'IJHCS': '2',  // International Journal of Human-Computer Studies
'IJNS': '2',  // International Journal of Neural Systems
'IJSWIS': '2',  // International Journal on Semantic Web and Information Systems
'IOT': '2',  // IEEE Internet of Things Journal
'IST': '2',  // Information and Software Technology
'Information Sciences': '2',  // INFORMATION SCIENCES (无缩写)
'JACM': '2',  // Journal of the ACM
'JAMIA': '2',  // Journal of the American Medical Informatics Association
'JBHI': '2',  // IEEE Journal of Biomedical and Health Informatics
'JCOMPLEXITY': '2',  // Journal of Complexity
'JFP': '2',  // Journal of Functional Programming
'JNCA': '2',  // Journal of Network and Computer Applications
'JSS': '2',  // Journal of Systems and Software
'KBS': '2',  // Knowledge-Based Systems
  'Neural Networks': '2',  // (CCF B类)
  'Neurocomputing': '2',  // (CCF C类)
  'PLOS Computational Biology': '2',  // (CCF B类)
'SICOMP': '2',  // SIAM Journal on Computing
'SIDMA': '2',  // SIAM Journal on Discrete Mathematics
'TAC': '2',  // IEEE Transactions on Affective Computing
'TACL': '2',  // Transactions of the Association for Computational Linguistics
'TASAE': '2',  // IEEE Transactions on Automation Science and Engineering
'TASLP': '2',  // IEEE/ACM Transactions on Audio, Speech and Language Processing
'TBD': '2',  // IEEE Transactions on Big Data
'TC': '2',  // IEEE Transactions on Computers
'TCASI': '2',  // IEEE Transactions on Circuits and Systems I: Regular Papers (I-REGULAR PAPERS)
'TCC (J)': '2',  // IEEE Transactions on Cloud Computing
'TCOM': '2',  // IEEE Transactions on Communications
'TDSC': '2',  // IEEE Transactions on Dependable and Secure Computing
'TGARS': '2',  // IEEE Transactions on Geoscience and Remote Sensing
'TITS': '2',  // IEEE Transactions on Intelligent Transportation Systems
'TKDE': '2',  // IEEE Transactions on Knowledge and Data Engineering
'TNNLS': '2',  // IEEE Transactions on Neural Networks and learning systems
'TNSM': '2',  // IEEE Transactions on Network and Service Management
'TOCHI': '2',  // ACM Transactions on Computer-Human Interaction
'TODS': '2',  // ACM Transactions on Database Systems
'TOPLAS': '2',  // ACM Transactions on Programming Languages and Systems
'TPDS': '2',  // IEEE Transactions on Parallel and Distributed Systems
'TR': '2',  // IEEE Transactions on Robotics
'TRETS': '2',  // ACM Transactions on Reconfigurable Technology and Systems
'TSC': '2',  // IEEE Transactions on Services Computing
'AAMAS (J)': '3',  // Autonomous Agents and Multi-Agent Systems
'APAL': '3',  // Annals of Pure and Applied Logic
'Ad Hoc Networks': '3',  // Ad Hoc Networks (无缩写)
  'Bioinformatics': '3',  // (CCF B类)
'CAD': '3',  // Computer-Aided Design
'CC (Net)': '3',  // Computer Communications
'CLSR': '3',  // Computer Law & Security Review
'CN': '3',  // Computer Networks
'CVIU': '3',  // Computer Vision and Image Understanding
'Computational Linguistics': '3',  // COMPUTATIONAL LINGUISTICS (无缩写)
'C&G': '3',  // Computers & Graphics (COMPUTERS & GRAPHICS-UK)
'Computer Speech & Language': '3',  // Computer Speech & Language (COMPUTER SPEECH AND LANGUAGE)
  'Connection Science': '3',  // (CCF C类)
'DAM': '3',  // Discrete Applied Mathematics
'DC': '3',  // Distributed Computing
'DKE': '3',  // Data & Knowledge Engineering
'Designs, Codes and Cryptography': '3',  // DESIGNS CODES AND CRYPTOGRAPHY (无缩写)
'EJIS': '3',  // European Journal of Information Systems
'Evolutionary Computation': '3',  // EVOLUTIONARY COMPUTATION (无缩写)
'FAC': '3',  // Formal Aspects of Computing
'FITEE': '3',  // Frontiers of Information Technology & Electronic Engineering
'GM': '3',  // Graphical Models
  'IEEE Transactions on Human-Machine Systems': '3',  // (CCF B类)
'IJAR': '3',  // International Journal of Approximate Reasoning
'IJDAR': '3',  // International Journal on Document Analysis and Recognition
'IJHCI': '3',  // International Journal of Human-Computer Interaction
'IJIS': '3',  // International Journal of Intelligent Systems
  'IMAGE': '3',  // (CCF C类)
'INFORMS': '3',  // INFORMS Journal on Computing
'IS': '3',  // Information Systems
'IVC': '3',  // Image and Vision Computing
'JAIR': '3',  // Journal of Artificial Intelligence Research
  'JASA': '3',  // (CCF B类)
'JASIST': '3',  // Journal of the Association for Information Science and Technology
'JBI': '3',  // Journal of Biomedical Informatics
'JCSS': '3',  // Journal of Computer and System Sciences
'JGC': '3',  // Journal of Grid computing
'JISA': '3',  // Journal of Information Security and Applications
'JPDC': '3',  // Journal of Parallel and Distributed Computing
  'JSA': '3',  // (CCF B类)
  'JSL': '3',  // (CCF C类)
'JSLHR': '3',  // Journal of Speech, Language, and Hearing Research
'JWS': '3',  // Journal of Web Semantics
  'Journal of Automated Reasoning': '3',  // (CCF B类)
'Journal of Cryptology': '3',  // JOURNAL OF CRYPTOLOGY (无缩写)
'LOGCOM': '3',  // Journal of Logic and Computation
'PRL': '3',  // Pattern Recognition Letters
'Parallel Computing': '3',  // PARALLEL COMPUTING (无缩写)
'SCP': '3',  // Science of Computer Programming
'SIGPRO': '3',  // Signal Processing
'SPECOM': '3',  // Speech Communication
'SPL': '3',  // IEEE Signal Processing Letters
'SoSyM': '3',  // Software and Systems Modeling
'TACO': '3',  // ACM Transactions on Architecture and Code Optimization
'TALG': '3',  // ACM Transactions on Algorithms
'TAP': '3',  // ACM Transactions on Applied Perception
'TCAD': '3',  // IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
'TCSS': '3',  // IEEE Transactions on Computational Social Systems
'TECS': '3',  // ACM Transactions on Embedded Computing Systems
'TG': '3',  // IEEE Transactions on Games
'TIT': '3',  // IEEE Transactions on Information Theory
'TKDD': '3',  // ACM Transactions on Knowledge Discovery from Data
'TOCE': '3',  // ACM Transactions on Computing Education
'TOCS': '3',  // ACM Transactions on Computer Systems
'TOMM': '3',  // ACM Transactions on Multimedia Computing, Communications and Applications
'TOMS': '3',  // ACM Transactions on Mathematical Software
'TON': '3',  // IEEE/ACM Transactions on Networking
'TOPS': '3',  // ACM Transactions on Privacy and Security
'TOS': '3',  // ACM Transactions on Storage
'TPLP': '3',  // Theory and Practice of Logic Programming
'TSUSC': '3',  // IEEE Transactions on Sustainable Computing
  'TVC': '3',  // (CCF C类)
'TVLSI': '3',  // IEEE Transactions on Very Large Scale Integration (VLSI) Systems
'UMUAI': '3',  // User Modeling and User-Adapted Interaction
'VLDBJ': '3',  // The VLDB Journal
'VR': '3',  // IEEE Virtual Reality
'ACTA': '4',  // Acta Informatica
'ASE (J)': '4',  // Automated Software Engineering
'Algorithmica': '4',  // Algorithmica
  'Applied Intelligence': '4',  // (CCF C类)
  'Artificial Life': '4',  // (CCF C类)
'BIT': '4',  // Behaviour & Information Technology
  'BMC Bioinformatics': '4',  // (CCF C类)
'CAGD': '4',  // Computer Aided Geometric Design
'CC (Theory)': '4',  // Computational Complexity
'CCF-THPC': '4',  // CCF Transactions on High Performance Computing
'Concurrency and Computation: Practice and Experience': '4',  // CONCURRENCY AND COMPUTATION-PRACTICE & EXPERIENCE
'CAVW': '4',  // computer animation & virtual worlds (COMPUTER ANIMATION AND VIRTUAL WORLDS)
'CGF': '4',  // Computer Graphics Forum
'CSCW (J)': '4',  // Computer Supported Cooperative Work (Computer Supported Cooperative Work-The Journal of Collaborative Computing and Work Practices)
  'CGTA': '4',  // (CCF C类)
  'Computational Intelligence': '4',  // (CCF C类)
  'Cybernetics and Systems': '4',  // (CCF C类)
'Cybersecurity': '4',  // Cybersecurity (无缩写)
'DCG': '4',  // Discrete & Computational Geometry
'DMKD': '4',  // Data Mining and Knowledge Discovery
'DPD': '4',  // Distributed and Parallel Databases
'EURASIP Journal on Information Security': '4',  // EURASIP Journal on Information Security (无缩写)
  'Expert Systems': '4',  // (CCF C类)
'FMSD': '4',  // Formal Methods in System Design
'FUIN': '4',  // Fundamenta Informaticae
'GeoInformatica': '4',  // GEOINFORMATICA (无缩写)
'IANDC': '4',  // Information and Computation
'IDA': '4',  // Intelligent Data Analysis
  'IEEE Geoscience and Remote Sensing Letters': '4',  // (CCF C类)
'IET Communications': '4',  // IET Communications (无缩写)
'IET Information Security': '4',  // IET Information Security (无缩写)
  'IET Intelligent Transport Systems': '4',  // (CCF C类)
  'IET Signal Processing': '4',  // (CCF C类)
'IET-CVI': '4',  // IET Computer Vision
'IET-IPR': '4',  // IET Image Processing
'IETS': '4',  // IET Software
'IJCIA': '4',  // International Journal of Computational Intelligence and Applications
'IJCIS': '4',  // International Journal of Cooperative Information Systems
'IJISP': '4',  // International Journal of Information Security and Privacy
'IJKM': '4',  // International Journal of Knowledge Management
'IJPRAI': '4',  // International Journal of Pattern Recognition and Artificial Intelligence
'IJSEKE': '4',  // International Journal of Software Engineering and Knowledge Engineering
'IJUFKS': '4',  // International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems
'IMCS': '4',  // Information and Computer Security
'IPL': '4',  // Information Processing Letters
'IR': '4',  // Information Retrieval Journal
'IWC': '4',  // Interacting with Computers
'Integration': '4',  // Integration, the VLSI Journal
'JCIS': '4',  // Journal of Computer Information Systems
'JCS': '4',  // Journal of Computer Security
'JCST': '4',  // Journal of Computer Science and Technology
'JDM': '4',  // Journal of Database Management
'JETC': '4',  // ACM Journal on Emerging Technologies in Computing Systems
'JETAI': '4',  // Journal of Experimental and Theoretical Artificial Intelligence (JOURNAL OF EXPERIMENTAL & THEORETICAL ARTIFICIAL INTELLIGENCE)
'JETTA': '4',  // Journal of Electronic Testing-Theory and Applications
'JGITM': '4',  // Journal of Global Information Technology Management
'JGO': '4',  // Journal of Global Optimization
'JIIS': '4',  // Journal of Intelligent Information Systems
'JLAMP': '4',  // Journal of Logical and Algebraic Methods in Programming
'JMLR': '4',  // Journal of Machine Learning Research
'JSC': '4',  // Journal of Symbolic Computation
'JVCIR': '4',  // Journal of Visual Communication and Image Representation
'JWE': '4',  // Journal of Web Engineering
'Journal of Software: Evolution and Process': '4',  // Journal of Software-Evolution and Process (无缩写)
'KAIS': '4',  // Knowledge and Information Systems
'LMCS': '4',  // Logical Methods in Computer Science
'MICPRO': '4',  // Microprocessors and Microsystems: Embedded Hardware-Design (MICROPROCESSORS AND MICROSYSTEMS)
'MS': '4',  // Multimedia Systems
'MSCS': '4',  // Mathematical Structures in Computer Science
'MONET': '4',  // Mobile Networks and Applications (MOBILE NETWORKS & APPLICATIONS)
  'Machine Learning': '4',  // (CCF B类)
  'Machine Translation': '4',  // (CCF C类)
  'Machine Vision and Applications': '4',  // (CCF C类)
'NLE': '4',  // Natural Language Engineering
'NPL': '4',  // Neural Processing Letters
  'Natural Computing': '4',  // (CCF C类)
'Networks': '4',  // NETWORKS (无缩写)
  'Neural Computation': '4',  // (CCF B类)
'PAA': '4',  // Pattern Analysis and Applications
'PMC': '4',  // Pervasive and Mobile Computing
'PPNA': '4',  // Peer-to-Peer Networking and Applications
'Performance Evaluation: An International Journal': '4',  // PERFORMANCE EVALUATION (无缩写)
'RE (J)': '4',  // Requirements Engineering
'RTS': '4',  // Real-Time Systems
'SIIMS': '4',  // SIAM Journal on Imaging Sciences
'SOCA': '4',  // Service Oriented Computing and Applications
'SPE': '4',  // Software: Practice and Experience (SOFTWARE-PRACTICE & EXPERIENCE)
'SQJ': '4',  // Software Quality Journal
'STTT': '4',  // International Journal of Software Tools for Technology Transfer (International Journal ON Software Tools for Technology Transfer)
'STVR': '4',  // Software Testing, Verification and Reliability (SOFTWARE TESTING VERIFICATION & RELIABILITY)
  'Soft Computing': '4',  // (CCF C类)
'TAAS': '4',  // ACM Transactions on Autonomous and Adaptive Systems
'TALLIP': '4',  // ACM Transactions on Asian and Low-Resource Language Information Processing
'TCBB': '4',  // IEEE/ACM Transactions on Computational Biology and Bioinformatics
'TCPS': '4',  // ACM Transactions on Cyber-Physical Systems
'TCS': '4',  // Theoretical Computer Science
'TIIS': '4',  // ACM Transactions on Interactive Intelligent Systems
'TJSC': '4',  // The Journal of Supercomputing (JOURNAL OF SUPERCOMPUTING)
'TOCL': '4',  // ACM Transactions on Computational Logic
'TODAES': '4',  // ACM Transactions on Design Automation of Electronic Systems
'TOIT': '4',  // ACM Transactions on Internet Technology
'TOSN': '4',  // ACM Transactions on Sensor Networks
'TWEB': '4',  // ACM Transactions on the Web
  'The Computer Journal': '4',  // (CCF B类)
'Theory of Computing Systems': '4',  // THEORY OF COMPUTING SYSTEMS (无缩写)
'WI': '4',  // Web Intelligence
'WWW (J)': '4',  // World Wide Web (WORLD WIDE WEB-INTERNET AND WEB INFORMATION SYSTEMS)
'Wireless Networks': '4',  // WIRELESS NETWORKS (无缩写)
}

export function getCasPartition(name) {
  return casMapping[name] || null
}
