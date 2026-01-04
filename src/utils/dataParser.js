// 数据解析工具
// 根据《中国计算机学会推荐国际学术会议和期刊目录-2022》填充

export const categories = [
  { id: 'architecture', name: '计算机体系结构', subItems: ['会议', '期刊'] },
  { id: 'network', name: '计算机网络', subItems: ['会议', '期刊'] },
  { id: 'security', name: '网络与信息安全', subItems: ['会议', '期刊'] },
  { id: 'software', name: '软件工程', subItems: ['会议', '期刊'] },
  { id: 'database', name: '数据库', subItems: ['会议', '期刊'] },
  { id: 'theory', name: '计算机科学理论', subItems: ['会议', '期刊'] },
  { id: 'graphics', name: '计算机图形学', subItems: ['会议', '期刊'] },
  { id: 'ai', name: '人工智能', subItems: ['会议', '期刊'] },
  { id: 'hci', name: '人机交互与普适计算', subItems: ['会议', '期刊'] },
  { id: 'interdisciplinary', name: '交叉', subItems: ['会议', '期刊'] }
]

// 获取完整数据（根据PDF内容填充）
export function getSampleData() {
  return {
    // 计算机体系结构/并行与分布计算/存储系统
    architecture: {
      journal: {
        A: [
          { name: 'TOCS', fullName: 'ACM Transactions on Computer Systems', url: 'http://dblp.uni-trier.de/db/journals/tocs/', level: 'A' },
          { name: 'TOS', fullName: 'ACM Transactions on Storage', url: 'http://dblp.uni-trier.de/db/journals/tos/', level: 'A' },
          { name: 'TCAD', fullName: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems', url: 'http://dblp.uni-trier.de/db/journals/tcad/', level: 'A' },
          { name: 'TC', fullName: 'IEEE Transactions on Computers', url: 'http://dblp.uni-trier.de/db/journals/tc/index.html', level: 'A' },
          { name: 'TPDS', fullName: 'IEEE Transactions on Parallel and Distributed Systems', url: 'http://dblp.uni-trier.de/db/journals/tpds/', level: 'A' },
          { name: 'TACO', fullName: 'ACM Transactions on Architecture and Code Optimization', url: 'http://dblp.uni-trier.de/db/journals/taco/', level: 'A' }
        ],
        B: [
          { name: 'TAAS', fullName: 'ACM Transactions on Autonomous and Adaptive Systems', url: 'http://dblp.uni-trier.de/db/journals/taas/', level: 'B' },
          { name: 'TODAES', fullName: 'ACM Transactions on Design Automation of Electronic Systems', url: 'http://dblp.uni-trier.de/db/journals/todaes/', level: 'B' },
          { name: 'TECS', fullName: 'ACM Transactions on Embedded Computing Systems', url: 'http://dblp.uni-trier.de/db/journals/tecs/', level: 'B' },
          { name: 'TRETS', fullName: 'ACM Transactions on Reconfigurable Technology and Systems', url: 'http://dblp.uni-trier.de/db/journals/trets/', level: 'B' },
          { name: 'TVLSI', fullName: 'IEEE Transactions on Very Large Scale Integration (VLSI) Systems', url: 'http://dblp.uni-trier.de/db/journals/tvlsi/', level: 'B' },
          { name: 'JPDC', fullName: 'Journal of Parallel and Distributed Computing', url: 'http://dblp.uni-trier.de/db/journals/jpdc/', level: 'B' },
          { name: 'JSA', fullName: 'Journal of Systems Architecture: Embedded Software Design', url: 'http://dblp.uni-trier.de/db/journals/jsa/', level: 'B' },
          { name: '', fullName: 'Parallel Computing', url: 'https://dblp.org/db/journals/pc/index.html', level: 'B' },
          { name: '', fullName: 'Performance Evaluation: An International Journal', url: 'https://dblp.org/db/journals/pe/index.html', level: 'B' }
        ],
        C: [
          { name: 'JETC', fullName: 'ACM Journal on Emerging Technologies in Computing Systems', url: 'http://dblp.uni-trier.de/db/journals/jetc/', level: 'C' },
          { name: '', fullName: 'Concurrency and Computation: Practice and Experience', url: 'http://dblp.uni-trier.de/db/journals/concurrency/', level: 'C' },
          { name: 'DC', fullName: 'Distributed Computing', url: 'http://dblp.uni-trier.de/db/journals/dc/', level: 'C' },
          { name: 'FGCS', fullName: 'Future Generation Computer Systems', url: 'http://dblp.uni-trier.de/db/journals/fgcs/', level: 'C' },
          { name: 'TCC', fullName: 'IEEE Transactions on Cloud Computing', url: 'https://dblp.uni-trier.de/db/journals/tcc/', level: 'C' },
          { name: 'Integration', fullName: 'Integration, the VLSI Journal', url: 'http://dblp.uni-trier.de/db/journals/integration/', level: 'C' },
          { name: 'JETTA', fullName: 'Journal of Electronic Testing-Theory and Applications', url: 'https://dblp.org/db/journals/et/index.html', level: 'C' },
          { name: 'JGC', fullName: 'Journal of Grid computing', url: 'https://dblp.uni-trier.de/db/journals/grid/', level: 'C' },
          { name: 'MICPRO', fullName: 'Microprocessors and Microsystems: Embedded Hardware-Design', url: 'http://dblp.uni-trier.de/db/journals/mam/', level: 'C' },
          { name: 'RTS', fullName: 'Real-Time Systems', url: 'http://dblp.uni-trier.de/db/journals/rts/', level: 'C' },
          { name: 'TJSC', fullName: 'The Journal of Supercomputing', url: 'http://dblp.uni-trier.de/db/journals/tjs/', level: 'C' },
          { name: 'TCASI', fullName: 'IEEE Transactions on Circuits and Systems I: Regular Papers', url: 'https://dblp.org/db/journals/tcasI/index.html', level: 'C' },
          { name: 'CCF-THPC', fullName: 'CCF Transactions on High Performance Computing', url: 'https://dblp.org/db/journals/ccfthpc/index.html', level: 'C' },
          { name: 'TSUSC', fullName: 'IEEE Transactions on Sustainable Computing', url: 'https://dblp.org/db/journals/tsusc/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'PPoPP', fullName: 'ACM SIGPLAN Symposium on Principles & Practice of Parallel Programming', url: 'http://dblp.uni-trier.de/db/conf/ppopp/', level: 'A' },
          { name: 'FAST', fullName: 'USENIX Conference on File and Storage Technologies', url: 'http://dblp.uni-trier.de/db/conf/fast/', level: 'A' },
          { name: 'DAC', fullName: 'Design Automation Conference', url: 'https://dblp.uni-trier.de/db/conf/dac/', level: 'A' },
          { name: 'HPCA', fullName: 'IEEE International Symposium on High Performance Computer Architecture', url: 'http://dblp.uni-trier.de/db/conf/hpca/', level: 'A' },
          { name: 'MICRO', fullName: 'IEEE/ACM International Symposium on Microarchitecture', url: 'https://dblp.uni-trier.de/db/conf/micro/index.html', level: 'A' },
          { name: 'SC', fullName: 'International Conference for High Performance Computing, Networking, Storage, and Analysis', url: 'http://dblp.uni-trier.de/db/conf/sc/', level: 'A' },
          { name: 'ASPLOS', fullName: 'International Conference on Architectural Support for Programming Languages and Operating Systems', url: 'http://dblp.uni-trier.de/db/conf/asplos/', level: 'A' },
          { name: 'ISCA', fullName: 'International Symposium on Computer Architecture', url: 'http://dblp.uni-trier.de/db/conf/isca/', level: 'A' },
          { name: 'USENIX ATC', fullName: 'USENIX Annual Technical Conference', url: 'http://dblp.uni-trier.de/db/conf/usenix/index.html', level: 'A' },
          { name: 'EuroSys', fullName: 'European Conference on Computer Systems', url: 'http://dblp.uni-trier.de/db/conf/eurosys/', level: 'A' }
        ],
        B: [
          { name: 'SoCC', fullName: 'ACM Symposium on Cloud Computing', url: 'http://dblp.uni-trier.de/db/conf/cloud/', level: 'B' },
          { name: 'SPAA', fullName: 'ACM Symposium on Parallelism in Algorithms and Architectures', url: 'http://dblp.uni-trier.de/db/conf/spaa/', level: 'B' },
          { name: 'PODC', fullName: 'ACM Symposium on Principles of Distributed Computing', url: 'http://dblp.uni-trier.de/db/conf/podc/', level: 'B' },
          { name: 'FPGA', fullName: 'ACM/SIGDA International Symposium on Field-Programmable Gate Arrays', url: 'http://dblp.uni-trier.de/db/conf/fpga/', level: 'B' },
          { name: 'CGO', fullName: 'The International Symposium on Code Generation and Optimization', url: 'http://dblp.uni-trier.de/db/conf/cgo/', level: 'B' },
          { name: 'DATE', fullName: 'Design, Automation & Test in Europe', url: 'http://dblp.uni-trier.de/db/conf/date/', level: 'B' },
          { name: 'HOT CHIPS', fullName: 'Hot Chips: A Symposium on High Performance Chips', url: 'https://dblp.org/db/conf/hotchips/index.html', level: 'B' },
          { name: 'CLUSTER', fullName: 'IEEE International Conference on Cluster Computing', url: 'https://dblp.uni-trier.de/db/conf/cluster/', level: 'B' },
          { name: 'ICCD', fullName: 'International Conference on Computer Design', url: 'http://dblp.uni-trier.de/db/conf/iccd/', level: 'B' },
          { name: 'ICCAD', fullName: 'International Conference on Computer-Aided Design', url: 'http://dblp.uni-trier.de/db/conf/iccad/', level: 'B' },
          { name: 'ICDCS', fullName: 'IEEE International Conference on Distributed Computing Systems', url: 'http://dblp.uni-trier.de/db/conf/icdcs/', level: 'B' },
          { name: 'CODES+ISSS', fullName: 'International Conference on Hardware/Software Co-design and System Synthesis', url: 'https://dblp.uni-trier.de/db/conf/codesisss/index.html', level: 'B' },
          { name: 'HiPEAC', fullName: 'International Conference on High Performance and Embedded Architectures and Compilers', url: 'http://dblp.uni-trier.de/db/conf/hipeac/', level: 'B' },
          { name: 'SIGMETRICS', fullName: 'International Conference on Measurement and Modeling of Computer Systems', url: 'http://dblp.uni-trier.de/db/conf/sigmetrics/', level: 'B' },
          { name: 'PACT', fullName: 'International Conference on Parallel Architectures and Compilation Techniques', url: 'http://dblp.uni-trier.de/db/conf/IEEEpact/', level: 'B' },
          { name: 'ICPP', fullName: 'International Conference on Parallel Processing', url: 'http://dblp.uni-trier.de/db/conf/icpp/', level: 'B' },
          { name: 'ICS', fullName: 'International Conference on Supercomputing', url: 'http://dblp.uni-trier.de/db/conf/ics/', level: 'B' },
          { name: 'VEE', fullName: 'International Conference on Virtual Execution Environments', url: 'http://dblp.uni-trier.de/db/conf/vee/', level: 'B' },
          { name: 'IPDPS', fullName: 'IEEE International Parallel & Distributed Processing Symposium', url: 'http://dblp.uni-trier.de/db/conf/ipps/', level: 'B' },
          { name: 'Performance', fullName: 'International Symposium on Computer Performance, Modeling, Measurements and Evaluation', url: 'http://dblp.uni-trier.de/db/conf/performance/', level: 'B' },
          { name: 'HPDC', fullName: 'The International ACM Symposium on High-Performance Parallel and Distributed Computing', url: 'http://dblp.uni-trier.de/db/conf/hpdc/', level: 'B' },
          { name: 'ITC', fullName: 'International Test Conference', url: 'http://dblp.uni-trier.de/db/conf/itc/', level: 'B' },
          { name: 'LISA', fullName: 'Large Installation System Administration Conference', url: 'http://dblp.uni-trier.de/db/conf/lisa/', level: 'B' },
          { name: 'MSST', fullName: 'Mass Storage Systems and Technologies', url: 'http://dblp.uni-trier.de/db/conf/mss/', level: 'B' },
          { name: 'RTAS', fullName: 'IEEE Real-Time and Embedded Technology and Applications Symposium', url: 'http://dblp.uni-trier.de/db/conf/rtas/', level: 'B' },
          { name: 'Euro-Par', fullName: 'European Conference on Parallel and Distributed Computing', url: 'http://dblp.uni-trier.de/db/conf/europar/', level: 'B' }
        ],
        C: [
          { name: 'CF', fullName: 'ACM International Conference on Computing Frontiers', url: 'http://dblp.uni-trier.de/db/conf/cf', level: 'C' },
          { name: 'SYSTOR', fullName: 'ACM International Systems and Storage Conference', url: 'http://dblp.uni-trier.de/db/conf/systor/index.html', level: 'C' },
          { name: 'NOCS', fullName: 'ACM/IEEE International Symposium on Networks-on-Chip', url: 'http://dblp.uni-trier.de/db/conf/nocs', level: 'C' },
          { name: 'ASAP', fullName: 'IEEE International Conference on Application-Specific Systems, Architectures, and Processors', url: 'http://dblp.uni-trier.de/db/conf/asap', level: 'C' },
          { name: 'ASP-DAC', fullName: 'Asia and South Pacific Design Automation Conference', url: 'http://dblp.uni-trier.de/db/conf/aspdac', level: 'C' },
          { name: 'ETS', fullName: 'IEEE European Test Symposium', url: 'http://dblp.uni-trier.de/db/conf/ets/', level: 'C' },
          { name: 'FPL', fullName: 'International Conference on Field-Programmable Logic and Applications', url: 'http://dblp.uni-trier.de/db/conf/fpl/', level: 'C' },
          { name: 'FCCM', fullName: 'IEEE Symposium on Field-Programmable Custom Computing Machines', url: 'http://dblp.uni-trier.de/db/conf/fccm/', level: 'C' },
          { name: 'GLSVLSI', fullName: 'Great Lakes Symposium on VLSI', url: 'http://dblp.uni-trier.de/db/conf/glvlsi/', level: 'C' },
          { name: 'ATS', fullName: 'IEEE Asian Test Symposium', url: 'http://dblp.uni-trier.de/db/conf/ats/', level: 'C' },
          { name: 'HPCC', fullName: 'IEEE International Conference on High Performance Computing and Communications', url: 'http://dblp.uni-trier.de/db/conf/hpcc/', level: 'C' },
          { name: 'HiPC', fullName: 'IEEE International Conference on High Performance Computing, Data and Analytics', url: 'http://dblp.uni-trier.de/db/conf/hipc/index.html', level: 'C' },
          { name: 'MASCOTS', fullName: 'International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems', url: 'http://dblp.uni-trier.de/db/conf/mascots/', level: 'C' },
          { name: 'ISPA', fullName: 'IEEE International Symposium on Parallel and Distributed Processing with Applications', url: 'http://dblp.uni-trier.de/db/conf/ispa/', level: 'C' },
          { name: 'CCGRID', fullName: 'IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing', url: 'http://dblp.uni-trier.de/db/conf/ccgrid/', level: 'C' },
          { name: 'NPC', fullName: 'IFIP International Conference on Network and Parallel Computing', url: 'http://dblp.uni-trier.de/db/conf/npc/', level: 'C' },
          { name: 'ICA3PP', fullName: 'International Conference on Algorithms and Architectures for Parallel Processing', url: 'http://dblp.uni-trier.de/db/conf/ica3pp/', level: 'C' },
          { name: 'CASES', fullName: 'International Conference on Compilers, Architectures, and Synthesis for Embedded Systems', url: 'http://dblp.uni-trier.de/db/conf/cases/index.html', level: 'C' },
          { name: 'FPT', fullName: 'International Conference on Field-Programmable Technology', url: 'http://dblp.uni-trier.de/db/conf/fpt/', level: 'C' },
          { name: 'ICPADS', fullName: 'International Conference on Parallel and Distributed Systems', url: 'http://dblp.uni-trier.de/db/conf/icpads/', level: 'C' },
          { name: 'ISCAS', fullName: 'IEEE International Symposium on Circuits and Systems', url: 'http://dblp.uni-trier.de/db/conf/iscas/', level: 'C' },
          { name: 'ISLPED', fullName: 'International Symposium on Low Power Electronics and Design', url: 'http://dblp.uni-trier.de/db/conf/islped/', level: 'C' },
          { name: 'ISPD', fullName: 'International Symposium on Physical Design', url: 'http://dblp.uni-trier.de/db/conf/ispd/', level: 'C' },
          { name: 'HOTI', fullName: 'IEEE Symposium on High-Performance Interconnects', url: 'http://dblp.uni-trier.de/db/conf/hoti/', level: 'C' },
          { name: 'VTS', fullName: 'IEEE VLSI Test Symposium', url: 'http://dblp.uni-trier.de/db/conf/vts/', level: 'C' },
          { name: 'ITC-Asia', fullName: 'International Test Conference in Asia', url: 'https://dblp.org/db/conf/itc-asia/index.html', level: 'C' }
        ]
      }
    },
    // 计算机网络
    network: {
      journal: {
        A: [
          { name: 'JSAC', fullName: 'IEEE Journal on Selected Areas in Communications', url: 'http://dblp.uni-trier.de/db/journals/jsac/', level: 'A' },
          { name: 'TMC', fullName: 'IEEE Transactions on Mobile Computing', url: 'http://dblp.uni-trier.de/db/journals/tmc/', level: 'A' },
          { name: 'TON', fullName: 'IEEE/ACM Transactions on Networking', url: 'http://dblp.uni-trier.de/db/journals/ton/', level: 'A' }
        ],
        B: [
          { name: 'TOIT', fullName: 'ACM Transactions on Internet Technology', url: 'http://dblp.uni-trier.de/db/journals/toit/', level: 'B' },
          { name: 'TOMM', fullName: 'ACM Transactions on Multimedia Computing, Communications and Applications', url: 'http://dblp.uni-trier.de/db/journals/tomccap/', level: 'B' },
          { name: 'TOSN', fullName: 'ACM Transactions on Sensor Networks', url: 'http://dblp.uni-trier.de/db/journals/tosn/', level: 'B' },
          { name: 'CN', fullName: 'Computer Networks', url: 'http://dblp.uni-trier.de/db/journals/cn/', level: 'B' },
          { name: 'TCOM', fullName: 'IEEE Transactions on Communications', url: 'http://dblp.uni-trier.de/db/journals/tcom/', level: 'B' },
          { name: 'TWC', fullName: 'IEEE Transactions on Wireless Communications', url: 'http://dblp.uni-trier.de/db/journals/twc/', level: 'B' }
        ],
        C: [
          { name: '', fullName: 'Ad Hoc Networks', url: 'http://dblp.uni-trier.de/db/journals/adhoc/', level: 'C' },
          { name: 'CC', fullName: 'Computer Communications', url: 'http://dblp.uni-trier.de/db/journals/comcom/', level: 'C' },
          { name: 'TNSM', fullName: 'IEEE Transactions on Network and Service Management', url: 'http://dblp.uni-trier.de/db/journals/tnsm/', level: 'C' },
          { name: '', fullName: 'IET Communications', url: 'http://dblp.uni-trier.de/db/journals/iet-com/', level: 'C' },
          { name: 'JNCA', fullName: 'Journal of Network and Computer Applications', url: 'http://dblp.uni-trier.de/db/journals/jnca/', level: 'C' },
          { name: 'MONET', fullName: 'Mobile Networks and Applications', url: 'http://dblp.uni-trier.de/db/journals/monet/', level: 'C' },
          { name: '', fullName: 'Networks', url: 'http://dblp.uni-trier.de/db/journals/networks/', level: 'C' },
          { name: 'PPNA', fullName: 'Peer-to-Peer Networking and Applications', url: 'http://dblp.uni-trier.de/db/journals/ppna/', level: 'C' },
          { name: 'WCMC', fullName: 'Wireless Communications and Mobile Computing', url: 'http://dblp.uni-trier.de/db/journals/wicomm/', level: 'C' },
          { name: '', fullName: 'Wireless Networks', url: 'http://dblp.uni-trier.de/db/journals/winet/', level: 'C' },
          { name: 'IOT', fullName: 'IEEE Internet of Things Journal', url: 'https://dblp.org/db/journals/iot/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'SIGCOMM', fullName: 'ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication', url: 'http://dblp.uni-trier.de/db/conf/sigcomm/index.html', level: 'A' },
          { name: 'MobiCom', fullName: 'ACM International Conference on Mobile Computing and Networking', url: 'http://dblp.uni-trier.de/db/conf/mobicom/', level: 'A' },
          { name: 'INFOCOM', fullName: 'IEEE International Conference on Computer Communications', url: 'http://dblp.uni-trier.de/db/conf/infocom/', level: 'A' },
          { name: 'NSDI', fullName: 'Symposium on Network System Design and Implementation', url: 'http://dblp.uni-trier.de/db/conf/nsdi/', level: 'A' }
        ],
        B: [
          { name: 'SenSys', fullName: 'ACM Conference on Embedded Networked Sensor Systems', url: 'http://dblp.uni-trier.de/db/conf/sensys/', level: 'B' },
          { name: 'CoNEXT', fullName: 'ACM International Conference on Emerging Networking Experiments and Technologies', url: 'http://dblp.uni-trier.de/db/conf/conext/', level: 'B' },
          { name: 'SECON', fullName: 'IEEE International Conference on Sensing, Communication, and Networking', url: 'http://dblp.uni-trier.de/db/conf/secon/', level: 'B' },
          { name: 'IPSN', fullName: 'International Conference on Information Processing in Sensor Networks', url: 'http://dblp.uni-trier.de/db/conf/ipsn/', level: 'B' },
          { name: 'MobiSys', fullName: 'ACM International Conference on Mobile Systems, Applications, and Services', url: 'http://dblp.uni-trier.de/db/conf/mobisys/', level: 'B' },
          { name: 'ICNP', fullName: 'IEEE International Conference on Network Protocols', url: 'http://dblp.uni-trier.de/db/conf/icnp/', level: 'B' },
          { name: 'MobiHoc', fullName: 'International Symposium on Theory, Algorithmic Foundations, and Protocol Design for Mobile Networks and Mobile Computing', url: 'http://dblp.uni-trier.de/db/conf/mobihoc/', level: 'B' },
          { name: 'NOSSDAV', fullName: 'International Workshop on Network and Operating System Support for Digital Audio and Video', url: 'http://dblp.uni-trier.de/db/conf/nossdav/', level: 'B' },
          { name: 'IWQoS', fullName: 'IEEE/ACM International Workshop on Quality of Service', url: 'http://dblp.uni-trier.de/db/conf/iwqos/', level: 'B' },
          { name: 'IMC', fullName: 'ACM Internet Measurement Conference', url: 'http://dblp.uni-trier.de/db/conf/imc/', level: 'B' }
        ],
        C: [
          { name: 'ANCS', fullName: 'ACM/IEEE Symposium on Architectures for Networking and Communication Systems', url: 'http://dblp.uni-trier.de/db/conf/ancs/', level: 'C' },
          { name: 'APNOMS', fullName: 'Asia-Pacific Network Operations and Management Symposium', url: 'http://dblp.uni-trier.de/db/conf/apnoms/', level: 'C' },
          { name: 'FORTE', fullName: 'International Conference on Formal Techniques for Distributed Objects, Components, and Systems', url: 'http://dblp.uni-trier.de/db/conf/forte/', level: 'C' },
          { name: 'LCN', fullName: 'IEEE Conference on Local Computer Networks', url: 'http://dblp.uni-trier.de/db/conf/lcn/', level: 'C' },
          { name: 'GLOBECOM', fullName: 'IEEE Global Communications Conference', url: 'http://dblp.uni-trier.de/db/conf/globecom/', level: 'C' },
          { name: 'ICC', fullName: 'IEEE International Conference on Communications', url: 'http://dblp.uni-trier.de/db/conf/icc/', level: 'C' },
          { name: 'ICCCN', fullName: 'IEEE International Conference on Computer Communications and Networks', url: 'http://dblp.uni-trier.de/db/conf/icccn/', level: 'C' },
          { name: 'MASS', fullName: 'IEEE International Conference on Mobile Adhoc and Sensor Systems', url: 'http://dblp.uni-trier.de/db/conf/mass/index.html', level: 'C' },
          { name: 'P2P', fullName: 'IEEE International Conference on Peer-to-Peer Computing', url: 'http://dblp.uni-trier.de/db/conf/p2p/', level: 'C' },
          { name: 'IPCCC', fullName: 'IEEE International Performance Computing and Communications Conference', url: 'http://dblp.uni-trier.de/db/conf/ipccc/', level: 'C' },
          { name: 'WoWMoM', fullName: 'IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks', url: 'http://dblp.uni-trier.de/db/conf/wowmom/', level: 'C' },
          { name: 'ISCC', fullName: 'IEEE Symposium on Computers and Communications', url: 'http://dblp.uni-trier.de/db/conf/iscc/', level: 'C' },
          { name: 'WCNC', fullName: 'IEEE Wireless Communications and Networking Conference', url: 'http://dblp.uni-trier.de/db/conf/wcnc/', level: 'C' },
          { name: 'Networking', fullName: 'IFIP International Conferences on Networking', url: 'http://dblp.uni-trier.de/db/conf/networking/index.html', level: 'C' },
          { name: 'IM', fullName: 'IFIP/IEEE International Symposium on Integrated Network Management', url: 'http://dblp.uni-trier.de/db/conf/im/index.html', level: 'C' },
          { name: 'MSN', fullName: 'International Conference on Mobility, Sensing and Networking', url: 'https://dblp.uni-trier.de/db/conf/msn/', level: 'C' },
          { name: 'MSWiM', fullName: 'International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems', url: 'http://dblp.uni-trier.de/db/conf/mswim/', level: 'C' },
          { name: 'WASA', fullName: 'International Conference on Wireless Algorithms, Systems, and Applications', url: 'http://dblp.uni-trier.de/db/conf/wasa/', level: 'C' },
          { name: 'HotNets', fullName: 'ACM The Workshop on Hot Topics in Networks', url: 'http://dblp.uni-trier.de/db/conf/hotnets/', level: 'C' },
          { name: 'APNet', fullName: 'Asia-Pacific Workshop on Networking', url: 'https://dblp.org/db/conf/apnet/index.html', level: 'C' }
        ]
      }
    },
    // 网络与信息安全
    security: {
      journal: {
        A: [
          { name: 'TDSC', fullName: 'IEEE Transactions on Dependable and Secure Computing', url: 'http://dblp.uni-trier.de/db/journals/tdsc/', level: 'A' },
          { name: 'TIFS', fullName: 'IEEE Transactions on Information Forensics and Security', url: 'http://dblp.uni-trier.de/db/journals/tifs/', level: 'A' },
          { name: '', fullName: 'Journal of Cryptology', url: 'http://dblp.uni-trier.de/db/journals/joc/', level: 'A' }
        ],
        B: [
          { name: 'TOPS', fullName: 'ACM Transactions on Privacy and Security', url: 'https://dblp.org/db/journals/tissec/index.html', level: 'B' },
          { name: '', fullName: 'Computers & Security', url: 'http://dblp.uni-trier.de/db/journals/compsec/', level: 'B' },
          { name: '', fullName: 'Designs, Codes and Cryptography', url: 'http://dblp.uni-trier.de/db/journals/dcc/', level: 'B' },
          { name: 'JCS', fullName: 'Journal of Computer Security', url: 'http://dblp.uni-trier.de/db/journals/jcs/', level: 'B' }
        ],
        C: [
          { name: 'CLSR', fullName: 'Computer Law & Security Review', url: 'https://dblp.org/db/journals/clsr/index.html', level: 'C' },
          { name: '', fullName: 'EURASIP Journal on Information Security', url: 'http://dblp.uni-trier.de/db/journals/ejisec/', level: 'C' },
          { name: '', fullName: 'IET Information Security', url: 'http://dblp.uni-trier.de/db/journals/iet-ifs/', level: 'C' },
          { name: 'IMCS', fullName: 'Information and Computer Security', url: 'http://dblp.uni-trier.de/db/journals/imcs/', level: 'C' },
          { name: 'IJICS', fullName: 'International Journal of Information and Computer Security', url: 'http://dblp.uni-trier.de/db/journals/ijics/', level: 'C' },
          { name: 'IJISP', fullName: 'International Journal of Information Security and Privacy', url: 'http://dblp.uni-trier.de/db/journals/ijisp/', level: 'C' },
          { name: 'JISA', fullName: 'Journal of Information Security and Applications', url: 'https://dblp.uni-trier.de/db/journals/istr/', level: 'C' },
          { name: 'SCN', fullName: 'Security and Communication Networks', url: 'http://dblp.uni-trier.de/db/journals/scn/', level: 'C' },
          { name: '', fullName: 'Cybersecurity', url: 'https://dblp.uni-trier.de/db/journals/cybersec/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'CCS', fullName: 'ACM Conference on Computer and Communications Security', url: 'http://dblp.uni-trier.de/db/conf/ccs/', level: 'A' },
          { name: 'EUROCRYPT', fullName: 'International Conference on the Theory and Applications of Cryptographic Techniques', url: 'http://dblp.uni-trier.de/db/conf/eurocrypt/', level: 'A' },
          { name: 'S&P', fullName: 'IEEE Symposium on Security and Privacy', url: 'http://dblp.uni-trier.de/db/conf/sp/', level: 'A' },
          { name: 'CRYPTO', fullName: 'International Cryptology Conference', url: 'http://dblp.uni-trier.de/db/conf/crypto/', level: 'A' },
          { name: 'USENIX Security', fullName: 'USENIX Security Symposium', url: 'http://dblp.uni-trier.de/db/conf/uss/', level: 'A' },
          { name: 'NDSS', fullName: 'Network and Distributed System Security Symposium', url: 'http://dblp.uni-trier.de/db/conf/ndss/', level: 'A' }
        ],
        B: [
          { name: 'ACSAC', fullName: 'Annual Computer Security Applications Conference', url: 'http://dblp.uni-trier.de/db/conf/acsac/', level: 'B' },
          { name: 'ASIACRYPT', fullName: 'Annual International Conference on the Theory and Application of Cryptology and Information Security', url: 'http://dblp.uni-trier.de/db/conf/asiacrypt/', level: 'B' },
          { name: 'ESORICS', fullName: 'European Symposium on Research in Computer Security', url: 'http://dblp.uni-trier.de/db/conf/esorics/', level: 'B' },
          { name: 'FSE', fullName: 'Fast Software Encryption', url: 'http://dblp.uni-trier.de/db/conf/fse/', level: 'B' },
          { name: 'CSFW', fullName: 'IEEE Computer Security Foundations Workshop', url: 'http://dblp.uni-trier.de/db/conf/csfw/', level: 'B' },
          { name: 'SRDS', fullName: 'IEEE International Symposium on Reliable Distributed Systems', url: 'http://dblp.uni-trier.de/db/conf/srds/', level: 'B' },
          { name: 'CHES', fullName: 'International Conference on Cryptographic Hardware and Embedded Systems', url: 'http://dblp.uni-trier.de/db/conf/ches/', level: 'B' },
          { name: 'DSN', fullName: 'International Conference on Dependable Systems and Networks', url: 'http://dblp.uni-trier.de/db/conf/dsn/', level: 'B' },
          { name: 'RAID', fullName: 'International Symposium on Recent Advances in Intrusion Detection', url: 'http://dblp.uni-trier.de/db/conf/raid/', level: 'B' },
          { name: 'PKC', fullName: 'International Workshop on Practice and Theory in Public Key Cryptography', url: 'http://dblp.uni-trier.de/db/conf/pkc/', level: 'B' },
          { name: 'TCC', fullName: 'Theory of Cryptography Conference', url: 'http://dblp.uni-trier.de/db/conf/tcc/', level: 'B' }
        ],
        C: [
          { name: 'WiSec', fullName: 'ACM Conference on Security and Privacy in Wireless and Mobile Networks', url: 'http://dblp.uni-trier.de/db/conf/wisec/', level: 'C' },
          { name: 'SACMAT', fullName: 'ACM Symposium on Access Control Models and Technologies', url: 'http://dblp.uni-trier.de/db/conf/sacmat/', level: 'C' },
          { name: 'DRM', fullName: 'ACM Workshop on Digital Rights Management', url: 'http://dblp.uni-trier.de/db/conf/drm/', level: 'C' },
          { name: 'IH&MMSec', fullName: 'ACM Workshop on Information Hiding and Multimedia Security', url: 'http://dblp.uni-trier.de/db/conf/ih/', level: 'C' },
          { name: 'ACNS', fullName: 'International Conference on Applied Cryptography and Network Security', url: 'http://dblp.uni-trier.de/db/conf/acns/', level: 'C' },
          { name: 'AsiaCCS', fullName: 'ACM Asia Conference on Computer and Communications Security', url: 'http://dblp.uni-trier.de/db/conf/ccs/', level: 'C' },
          { name: 'ACISP', fullName: 'Australasia Conference on Information Security and Privacy', url: 'http://dblp.uni-trier.de/db/conf/acisp/', level: 'C' },
          { name: 'CT-RSA', fullName: "The Cryptographer's Track at RSA Conference", url: 'http://dblp.uni-trier.de/db/conf/ctrsa/', level: 'C' },
          { name: 'DIMVA', fullName: 'Conference on Detection of Intrusions and Malware & Vulnerability Assessment', url: 'http://dblp.uni-trier.de/db/conf/dimva/', level: 'C' },
          { name: 'DFRWS', fullName: 'Digital Forensic Research Workshop', url: 'http://dblp.uni-trier.de/db/conf/dfrws/', level: 'C' },
          { name: 'FC', fullName: 'Financial Cryptography and Data Security', url: 'http://dblp.uni-trier.de/db/conf/fc/', level: 'C' },
          { name: 'TrustCom', fullName: 'IEEE International Conference on Trust, Security and Privacy in Computing and Communications', url: 'http://dblp.uni-trier.de/db/conf/trustcom/', level: 'C' },
          { name: 'SEC', fullName: 'IFIP International Information Security Conference', url: 'http://dblp.uni-trier.de/db/conf/sec/', level: 'C' },
          { name: 'IFIP WG 11.9', fullName: 'IFIP Working Group 11.9 International Conference on Digital Forensics', url: 'https://dblp.org/db/conf/ifip11-9/index.html', level: 'C' },
          { name: 'ISC', fullName: 'Information Security Conference', url: 'http://dblp.uni-trier.de/db/conf/isw/', level: 'C' },
          { name: 'ICDF2C', fullName: 'International Conference on Digital Forensics & Cyber Crime', url: 'http://dblp.uni-trier.de/db/conf/icdf2c/', level: 'C' },
          { name: 'ICICS', fullName: 'International Conference on Information and Communications Security', url: 'http://dblp.uni-trier.de/db/conf/icics/', level: 'C' },
          { name: 'SecureComm', fullName: 'International Conference on Security and Privacy in Communication Networks', url: 'http://dblp.uni-trier.de/db/conf/securecomm/', level: 'C' },
          { name: 'NSPW', fullName: 'New Security Paradigms Workshop', url: 'http://dblp.uni-trier.de/db/conf/nspw/', level: 'C' },
          { name: 'PAM', fullName: 'Passive and Active Measurement Conference', url: 'http://dblp.uni-trier.de/db/conf/pam/', level: 'C' },
          { name: 'PETS', fullName: 'Privacy Enhancing Technologies Symposium', url: 'http://dblp.uni-trier.de/db/conf/pet/', level: 'C' },
          { name: 'SAC', fullName: 'Selected Areas in Cryptography', url: 'http://dblp.uni-trier.de/db/conf/sacrypt/', level: 'C' },
          { name: 'SOUPS', fullName: 'Symposium On Usable Privacy and Security', url: 'http://dblp.uni-trier.de/db/conf/soups/', level: 'C' },
          { name: 'HotSec', fullName: '', url: 'http://www.usenix.org/events/', level: 'C' },
          { name: 'EuroS&P', fullName: 'IEEE European Symposium on Security and Privacy', url: 'https://dblp.org/db/conf/eurosp/index.html', level: 'C' },
          { name: 'Inscrypt', fullName: 'International Conference on Information Security and Cryptology', url: 'https://dblp.org/db/conf/cisc/index.html', level: 'C' }
        ]
      }
    },
    // 软件工程/系统软件/程序设计语言
    software: {
      journal: {
        A: [
          { name: 'TOPLAS', fullName: 'ACM Transactions on Programming Languages and Systems', url: 'http://dblp.uni-trier.de/db/journals/toplas/', level: 'A' },
          { name: 'TOSEM', fullName: 'ACM Transactions on Software Engineering and Methodology', url: 'http://dblp.uni-trier.de/db/journals/tosem/', level: 'A' },
          { name: 'TSE', fullName: 'IEEE Transactions on Software Engineering', url: 'http://dblp.uni-trier.de/db/journals/tse/', level: 'A' },
          { name: 'TSC', fullName: 'IEEE Transactions on Services Computing', url: 'http://dblp.uni-trier.de/db/journals/tsc/', level: 'A' }
        ],
        B: [
          { name: 'ASE', fullName: 'Automated Software Engineering', url: 'http://dblp.uni-trier.de/db/journals/ase/', level: 'B' },
          { name: 'ESE', fullName: 'Empirical Software Engineering', url: 'http://dblp.uni-trier.de/db/journals/ese/', level: 'B' },
          { name: 'IETS', fullName: 'IET Software', url: 'https://dblp.uni-trier.de/db/journals/iet-sen/', level: 'B' },
          { name: 'IST', fullName: 'Information and Software Technology', url: 'http://dblp.uni-trier.de/db/journals/infsof/index.html', level: 'B' },
          { name: 'JFP', fullName: 'Journal of Functional Programming', url: 'http://dblp.uni-trier.de/db/journals/jfp/', level: 'B' },
          { name: '', fullName: 'Journal of Software: Evolution and Process', url: 'http://dblp.uni-trier.de/db/journals/smr/', level: 'B' },
          { name: 'JSS', fullName: 'Journal of Systems and Software', url: 'http://dblp.uni-trier.de/db/journals/jss/', level: 'B' },
          { name: 'RE', fullName: 'Requirements Engineering', url: 'http://dblp.uni-trier.de/db/journals/re/', level: 'B' },
          { name: 'SCP', fullName: 'Science of Computer Programming', url: 'http://dblp.uni-trier.de/db/journals/scp/', level: 'B' },
          { name: 'SoSyM', fullName: 'Software and Systems Modeling', url: 'http://dblp.uni-trier.de/db/journals/sosym/', level: 'B' },
          { name: 'STVR', fullName: 'Software Testing, Verification and Reliability', url: 'http://dblp.uni-trier.de/db/journals/stvr/index.html', level: 'B' },
          { name: 'SPE', fullName: 'Software: Practice and Experience', url: 'http://dblp.uni-trier.de/db/journals/spe/', level: 'B' }
        ],
        C: [
          { name: 'CL', fullName: 'Computer Languages, Systems and Structures', url: 'http://dblp.uni-trier.de/db/journals/cl/index.html', level: 'C' },
          { name: 'IJSEKE', fullName: 'International Journal of Software Engineering and Knowledge Engineering', url: 'http://dblp.uni-trier.de/db/journals/ijseke/index.html', level: 'C' },
          { name: 'STTT', fullName: 'International Journal of Software Tools for Technology Transfer', url: 'http://dblp.uni-trier.de/db/journals/sttt/', level: 'C' },
          { name: 'JLAMP', fullName: 'Journal of Logical and Algebraic Methods in Programming', url: 'https://dblp.uni-trier.de/db/journals/jlap/index.html', level: 'C' },
          { name: 'JWE', fullName: 'Journal of Web Engineering', url: 'http://dblp.uni-trier.de/db/journals/jwe/', level: 'C' },
          { name: 'SOCA', fullName: 'Service Oriented Computing and Applications', url: 'http://dblp.uni-trier.de/db/journals/soca/', level: 'C' },
          { name: 'SQJ', fullName: 'Software Quality Journal', url: 'http://dblp.uni-trier.de/db/journals/sqj/', level: 'C' },
          { name: 'TPLP', fullName: 'Theory and Practice of Logic Programming', url: 'http://dblp.uni-trier.de/db/journals/tplp/', level: 'C' },
          { name: 'PACM PL', fullName: 'Proceedings of the ACM on Programming Languages', url: 'https://dblp.org/db/journals/pacmpl/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'PLDI', fullName: 'ACM SIGPLAN Conference on Programming Language Design and Implementation', url: 'http://dblp.uni-trier.de/db/conf/pldi/', level: 'A' },
          { name: 'POPL', fullName: 'ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages', url: 'http://dblp.uni-trier.de/db/conf/popl/', level: 'A' },
          { name: 'FSE/ESEC', fullName: 'ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering', url: 'http://dblp.uni-trier.de/db/conf/sigsoft/', level: 'A' },
          { name: 'SOSP', fullName: 'ACM Symposium on Operating Systems Principles', url: 'http://dblp.uni-trier.de/db/conf/sosp/', level: 'A' },
          { name: 'OOPSLA', fullName: 'Conference on Object-Oriented Programming Systems, Languages, and Applications', url: 'http://dblp.uni-trier.de/db/conf/oopsla/', level: 'A' },
          { name: 'ASE', fullName: 'International Conference on Automated Software Engineering', url: 'http://dblp.uni-trier.de/db/conf/kbse/', level: 'A' },
          { name: 'ICSE', fullName: 'International Conference on Software Engineering', url: 'http://dblp.uni-trier.de/db/conf/icse/', level: 'A' },
          { name: 'ISSTA', fullName: 'International Symposium on Software Testing and Analysis', url: 'http://dblp.uni-trier.de/db/conf/issta/', level: 'A' },
          { name: 'OSDI', fullName: 'USENIX Symposium on Operating Systems Design and Implementation', url: 'http://dblp.uni-trier.de/db/conf/osdi/', level: 'A' },
          { name: 'FM', fullName: 'International Symposium on Formal Methods', url: 'http://dblp.uni-trier.de/db/conf/fm/', level: 'A' }
        ],
        B: [
          { name: 'ECOOP', fullName: 'European Conference on Object-Oriented Programming', url: 'http://dblp.uni-trier.de/db/conf/ecoop/', level: 'B' },
          { name: 'ETAPS', fullName: 'European Joint Conferences on Theory and Practice of Software', url: 'http://dblp.uni-trier.de/db/conf/etaps/', level: 'B' },
          { name: 'ICPC', fullName: 'IEEE International Conference on Program Comprehension', url: 'http://dblp.uni-trier.de/db/conf/iwpc/', level: 'B' },
          { name: 'RE', fullName: 'IEEE International Requirements Engineering Conference', url: 'http://dblp.uni-trier.de/db/conf/re/', level: 'B' },
          { name: 'CAiSE', fullName: 'International Conference on Advanced Information Systems Engineering', url: 'http://dblp.uni-trier.de/db/conf/caise/', level: 'B' },
          { name: 'ICFP', fullName: 'ACM SIGPLAN International Conference on Function Programming', url: 'http://dblp.uni-trier.de/db/conf/icfp/', level: 'B' },
          { name: 'LCTES', fullName: 'ACM SIGPLAN/SIGBED International Conference on Languages, Compilers and Tools for Embedded Systems', url: 'http://dblp.uni-trier.de/db/conf/lctrts/', level: 'B' },
          { name: 'MoDELS', fullName: 'ACM/IEEE International Conference on Model Driven Engineering Languages and Systems', url: 'http://dblp.uni-trier.de/db/conf/models/', level: 'B' },
          { name: 'CP', fullName: 'International Conference on Principles and Practice of Constraint Programming', url: 'http://dblp.uni-trier.de/db/conf/cp/', level: 'B' },
          { name: 'ICSOC', fullName: 'International Conference on Service Oriented Computing', url: 'http://dblp.uni-trier.de/db/conf/icsoc/', level: 'B' },
          { name: 'SANER', fullName: 'IEEE International Conference on Software Analysis, Evolution, and Reengineering', url: 'http://dblp.uni-trier.de/db/conf/wcre/', level: 'B' },
          { name: 'ICSME', fullName: 'International Conference on Software Maintenance and Evolution', url: 'http://dblp.uni-trier.de/db/conf/icsm/', level: 'B' },
          { name: 'VMCAI', fullName: 'International Conference on Verification, Model Checking and Abstract Interpretation', url: 'http://dblp.uni-trier.de/db/conf/vmcai/', level: 'B' },
          { name: 'ICWS', fullName: 'IEEE International Conference on Web Services', url: 'http://dblp.uni-trier.de/db/conf/icws/', level: 'B' },
          { name: 'Middleware', fullName: 'International Middleware Conference', url: 'http://dblp.uni-trier.de/db/conf/middleware/', level: 'B' },
          { name: 'SAS', fullName: 'International Static Analysis Symposium', url: 'http://dblp.uni-trier.de/db/conf/sas/', level: 'B' },
          { name: 'ESEM', fullName: 'International Symposium on Empirical Software Engineering and Measurement', url: 'http://dblp.uni-trier.de/db/conf/esem/', level: 'B' },
          { name: 'ISSRE', fullName: 'IEEE International Symposium on Software Reliability Engineering', url: 'http://dblp.uni-trier.de/db/conf/issre/', level: 'B' },
          { name: 'HotOS', fullName: 'USENIX Workshop on Hot Topics in Operating Systems', url: 'http://dblp.uni-trier.de/db/conf/hotos/', level: 'B' }
        ],
        C: [
          { name: 'PEPM', fullName: 'ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation', url: 'http://dblp.uni-trier.de/db/conf/pepm/', level: 'C' },
          { name: 'PASTE', fullName: 'ACM SIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering', url: 'http://dblp.uni-trier.de/db/conf/paste/', level: 'C' },
          { name: 'APLAS', fullName: 'Asian Symposium on Programming Languages and Systems', url: 'http://dblp.uni-trier.de/db/conf/aplas/', level: 'C' },
          { name: 'APSEC', fullName: 'Asia-Pacific Software Engineering Conference', url: 'http://dblp.uni-trier.de/db/conf/apsec/', level: 'C' },
          { name: 'EASE', fullName: 'International Conference on Evaluation and Assessment in Software Engineering', url: 'http://dblp.uni-trier.de/db/conf/ease/', level: 'C' },
          { name: 'ICECCS', fullName: 'International Conference on Engineering of Complex Computer Systems', url: 'http://dblp.uni-trier.de/db/conf/iceccs/', level: 'C' },
          { name: 'ICST', fullName: 'IEEE International Conference on Software Testing, Verification and Validation', url: 'http://dblp.uni-trier.de/db/conf/icst/', level: 'C' },
          { name: 'ISPASS', fullName: 'IEEE International Symposium on Performance Analysis of Systems and Software', url: 'http://dblp.uni-trier.de/db/conf/ispass/', level: 'C' },
          { name: 'SCAM', fullName: 'IEEE International Working Conference on Source Code Analysis and Manipulation', url: 'http://dblp.uni-trier.de/db/conf/scam/', level: 'C' },
          { name: 'COMPSAC', fullName: 'International Computer Software and Applications Conference', url: 'http://dblp.uni-trier.de/db/conf/compsac/', level: 'C' },
          { name: 'ICFEM', fullName: 'International Conference on Formal Engineering Methods', url: 'http://dblp.uni-trier.de/db/conf/icfem/', level: 'C' },
          { name: 'TOOLS', fullName: 'International Conference on Objects, Models, Components, Patterns（2019年停办）', url: 'http://dblp.uni-trier.de/db/conf/tools/index.html', level: 'C' },
          { name: 'SCC', fullName: 'IEEE International Conference on Services Computing', url: 'http://dblp.uni-trier.de/db/conf/IEEEscc/', level: 'C' },
          { name: 'ICSSP', fullName: 'International Conference on Software and System Process', url: 'http://dblp.uni-trier.de/db/conf/ispw/', level: 'C' },
          { name: 'SEKE', fullName: 'International Conference on Software Engineering and Knowledge Engineering', url: 'http://dblp.uni-trier.de/db/conf/seke/', level: 'C' },
          { name: 'QRS', fullName: 'International Conference on Software Quality, Reliability and Security', url: 'https://dblp.uni-trier.de/db/conf/qrs/', level: 'C' },
          { name: 'ICSR', fullName: 'International Conference on Software Reuse', url: 'http://dblp.uni-trier.de/db/conf/icsr/', level: 'C' },
          { name: 'ICWE', fullName: 'International Conference on Web Engineering', url: 'http://dblp.uni-trier.de/db/conf/icwe/', level: 'C' },
          { name: 'SPIN', fullName: 'International Symposium on Model Checking of Software', url: 'http://dblp.uni-trier.de/db/conf/spin/index.html', level: 'C' },
          { name: 'ATVA', fullName: 'International Symposium on Automated Technology for Verification and Analysis', url: 'http://dblp.uni-trier.de/db/conf/atva/', level: 'C' },
          { name: 'LOPSTR', fullName: 'International Symposium on Logic-based Program Synthesis and Transformation', url: 'http://dblp.uni-trier.de/db/conf/lopstr/', level: 'C' },
          { name: 'TASE', fullName: 'Theoretical Aspects of Software Engineering Conference', url: 'http://dblp.uni-trier.de/db/conf/tase/', level: 'C' },
          { name: 'MSR', fullName: 'Mining Software Repositories', url: 'http://dblp.uni-trier.de/db/conf/msr/', level: 'C' },
          { name: 'REFSQ', fullName: 'Requirements Engineering: Foundation for Software Quality', url: 'http://dblp.uni-trier.de/db/conf/refsq/', level: 'C' },
          { name: 'WICSA', fullName: 'Working IEEE/IFIP Conference on Software Architecture', url: 'http://dblp.uni-trier.de/db/conf/wicsa/', level: 'C' },
          { name: 'Internetware', fullName: 'Asia-Pacific Symposium on Internetware', url: 'https://dblp.org/db/conf/internetware/index.html', level: 'C' },
          { name: 'RV', fullName: 'International Conference on Runtime Verification', url: 'https://dblp.org/db/conf/rv/index.html', level: 'C' }
        ]
      }
    },
    // 数据库/数据挖掘/内容检索
    database: {
      journal: {
        A: [
          { name: 'TODS', fullName: 'ACM Transactions on Database Systems', url: 'http://dblp.uni-trier.de/db/journals/tods/', level: 'A' },
          { name: 'TOIS', fullName: 'ACM Transactions on Information Systems', url: 'http://dblp.uni-trier.de/db/journals/tois/', level: 'A' },
          { name: 'TKDE', fullName: 'IEEE Transactions on Knowledge and Data Engineering', url: 'http://dblp.uni-trier.de/db/journals/tkde/', level: 'A' },
          { name: 'VLDBJ', fullName: 'The VLDB Journal', url: 'http://dblp.uni-trier.de/db/journals/vldb/', level: 'A' }
        ],
        B: [
          { name: 'TKDD', fullName: 'ACM Transactions on Knowledge Discovery from Data', url: 'http://dblp.uni-trier.de/db/journals/tkdd/', level: 'B' },
          { name: 'TWEB', fullName: 'ACM Transactions on the Web', url: 'http://dblp.uni-trier.de/db/journals/tweb/', level: 'B' },
          { name: 'AEI', fullName: 'Advanced Engineering Informatics', url: 'http://dblp.uni-trier.de/db/journals/aei/', level: 'B' },
          { name: 'DKE', fullName: 'Data & Knowledge Engineering', url: 'http://dblp.uni-trier.de/db/journals/dke/', level: 'B' },
          { name: 'DMKD', fullName: 'Data Mining and Knowledge Discovery', url: 'http://dblp.uni-trier.de/db/journals/datamine/', level: 'B' },
          { name: 'EJIS', fullName: 'European Journal of Information Systems', url: 'http://dblp.uni-trier.de/db/journals/ejis/', level: 'B' },
          { name: '', fullName: 'GeoInformatica', url: 'http://dblp.uni-trier.de/db/journals/geoinformatica/', level: 'B' },
          { name: 'IPM', fullName: 'Information Processing and Management', url: 'http://dblp.uni-trier.de/db/journals/ipm/', level: 'B' },
          { name: '', fullName: 'Information Sciences', url: 'http://dblp.uni-trier.de/db/journals/isci/', level: 'B' },
          { name: 'IS', fullName: 'Information Systems', url: 'http://dblp.uni-trier.de/db/journals/is/', level: 'B' },
          { name: 'JASIST', fullName: 'Journal of the Association for Information Science and Technology', url: 'http://dblp.uni-trier.de/db/journals/jasis/', level: 'B' },
          { name: 'JWS', fullName: 'Journal of Web Semantics', url: 'http://dblp.uni-trier.de/db/journals/ws/', level: 'B' },
          { name: 'KAIS', fullName: 'Knowledge and Information Systems', url: 'http://dblp.uni-trier.de/db/journals/kais/', level: 'B' }
        ],
        C: [
          { name: 'DPD', fullName: 'Distributed and Parallel Databases', url: 'http://dblp.uni-trier.de/db/journals/dpd/', level: 'C' },
          { name: 'I&M', fullName: 'Information & Management', url: 'http://dblp.uni-trier.de/db/journals/iam/', level: 'C' },
          { name: 'IPL', fullName: 'Information Processing Letters', url: 'http://dblp.uni-trier.de/db/journals/ipl/', level: 'C' },
          { name: 'IR', fullName: 'Information Retrieval Journal', url: 'http://dblp.uni-trier.de/db/journals/ir/', level: 'C' },
          { name: 'IJCIS', fullName: 'International Journal of Cooperative Information Systems', url: 'http://dblp.uni-trier.de/db/journals/ijcis/', level: 'C' },
          { name: 'IJGIS', fullName: 'International Journal of Geographical Information Science', url: 'http://dblp.uni-trier.de/db/journals/gis/', level: 'C' },
          { name: 'IJIS', fullName: 'International Journal of Intelligent Systems', url: 'http://dblp.uni-trier.de/db/journals/ijis/', level: 'C' },
          { name: 'IJKM', fullName: 'International Journal of Knowledge Management', url: 'http://dblp.uni-trier.de/db/journals/ijkm/', level: 'C' },
          { name: 'IJSWIS', fullName: 'International Journal on Semantic Web and Information Systems', url: 'http://dblp.uni-trier.de/db/journals/ijswis/', level: 'C' },
          { name: 'JCIS', fullName: 'Journal of Computer Information Systems', url: 'http://dblp.uni-trier.de/db/journals/jcis/', level: 'C' },
          { name: 'JDM', fullName: 'Journal of Database Management', url: 'http://dblp.uni-trier.de/db/journals/jdm/', level: 'C' },
          { name: 'JGITM', fullName: 'Journal of Global Information Technology Management', url: 'https://dblp.org/db/journals/jgim/index.html', level: 'C' },
          { name: 'JIIS', fullName: 'Journal of Intelligent Information Systems', url: 'http://dblp.uni-trier.de/db/journals/jiis/', level: 'C' },
          { name: 'JSIS', fullName: 'The Journal of Strategic Information Systems', url: 'http://dblp.uni-trier.de/db/journals/jsis/', level: 'C' },
          { name: 'DSE', fullName: 'Data Science and Engineering', url: 'https://dblp.org/db/journals/dase/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'SIGMOD', fullName: 'ACM SIGMOD Conference', url: 'http://dblp.uni-trier.de/db/conf/sigmod/', level: 'A' },
          { name: 'SIGKDD', fullName: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining', url: 'http://dblp.uni-trier.de/db/conf/kdd/', level: 'A' },
          { name: 'ICDE', fullName: 'IEEE International Conference on Data Engineering', url: 'http://dblp.uni-trier.de/db/conf/icde/', level: 'A' },
          { name: 'SIGIR', fullName: 'International ACM SIGIR Conference on Research and Development in Information Retrieval', url: 'http://dblp.uni-trier.de/db/conf/sigir/', level: 'A' },
          { name: 'VLDB', fullName: 'International Conference on Very Large Data Bases', url: 'http://dblp.uni-trier.de/db/conf/vldb/', level: 'A' }
        ],
        B: [
          { name: 'CIKM', fullName: 'ACM International Conference on Information and Knowledge Management', url: 'http://dblp.uni-trier.de/db/conf/cikm/', level: 'B' },
          { name: 'WSDM', fullName: 'ACM International Conference on Web Search and Data Mining', url: 'http://dblp.uni-trier.de/db/conf/wsdm/', level: 'B' },
          { name: 'PODS', fullName: 'ACM SIGMOD-SIGACT-SIGAI Symposium on Principles of Database Systems', url: 'http://dblp.uni-trier.de/db/conf/pods/', level: 'B' },
          { name: 'DASFAA', fullName: 'International Conference on Database Systems for Advanced Applications', url: 'http://dblp.uni-trier.de/db/conf/dasfaa/', level: 'B' },
          { name: 'ECML-PKDD', fullName: 'European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases', url: 'http://dblp.uni-trier.de/db/conf/ecml/ http://dblp.uni-trier.de/db/conf/pkdd/', level: 'B' },
          { name: 'ISWC', fullName: 'IEEE International Semantic Web Conference', url: 'http://dblp.uni-trier.de/db/conf/semweb/', level: 'B' },
          { name: 'ICDM', fullName: 'IEEE International Conference on Data Mining', url: 'http://dblp.uni-trier.de/db/conf/icdm/', level: 'B' },
          { name: 'ICDT', fullName: 'International Conference on Database Theory', url: 'http://dblp.uni-trier.de/db/conf/icdt/', level: 'B' },
          { name: 'EDBT', fullName: 'International Conference on Extending Database Technology', url: 'http://dblp.uni-trier.de/db/conf/edbt/', level: 'B' },
          { name: 'CIDR', fullName: 'Conference on Innovative Data Systems Research', url: 'http://dblp.uni-trier.de/db/conf/cidr/', level: 'B' },
          { name: 'SDM', fullName: 'SIAM International Conference on Data Mining', url: 'http://dblp.uni-trier.de/db/conf/sdm/', level: 'B' },
          { name: 'RecSys', fullName: 'ACM Conference on Recommender Systems', url: 'https://dblp.org/db/conf/recsys/index.html', level: 'B' }
        ],
        C: [
          { name: 'APWeb', fullName: 'Asia Pacific Web Conference', url: 'http://dblp.uni-trier.de/db/conf/apweb/', level: 'C' },
          { name: 'DEXA', fullName: 'International Conference on Database and Expert System Applications', url: 'http://dblp.uni-trier.de/db/conf/dexa/', level: 'C' },
          { name: 'ECIR', fullName: 'European Conference on Information Retrieval', url: 'http://dblp.uni-trier.de/db/conf/ecir/', level: 'C' },
          { name: 'ESWC', fullName: 'Extended Semantic Web Conference', url: 'http://dblp.uni-trier.de/db/conf/esws/', level: 'C' },
          { name: 'WebDB', fullName: 'International Workshop on Web and Databases', url: 'http://dblp.uni-trier.de/db/conf/webdb/', level: 'C' },
          { name: 'ER', fullName: 'International Conference on Conceptual Modeling', url: 'http://dblp.uni-trier.de/db/conf/er/', level: 'C' },
          { name: 'MDM', fullName: 'International Conference on Mobile Data Management', url: 'http://dblp.uni-trier.de/db/conf/mdm/', level: 'C' },
          { name: 'SSDBM', fullName: 'International Conference on Scientific and Statistical Database Management', url: 'http://dblp.uni-trier.de/db/conf/ssdbm/', level: 'C' },
          { name: 'WAIM', fullName: 'International Conference on Web Age Information Management', url: 'http://dblp.uni-trier.de/db/conf/waim/', level: 'C' },
          { name: 'SSTD', fullName: 'International Symposium on Spatial and Temporal Databases', url: 'http://dblp.uni-trier.de/db/conf/ssd/', level: 'C' },
          { name: 'PAKDD', fullName: 'Pacific-Asia Conference on Knowledge Discovery and Data Mining', url: 'http://dblp.uni-trier.de/db/conf/pakdd/', level: 'C' },
          { name: 'WISE', fullName: 'Web Information Systems Engineering', url: 'http://dblp.uni-trier.de/db/conf/wise/', level: 'C' },
          { name: 'ADMA', fullName: 'International Conference on Advanced Data Mining and Applications', url: 'https://dblp.org/db/conf/adma/index.html', level: 'C' }
        ]
      }
    },
    // 计算机科学理论
    theory: {
      journal: {
        A: [
          { name: 'TIT', fullName: 'IEEE Transactions on Information Theory', url: 'http://dblp.uni-trier.de/db/journals/tit/', level: 'A' },
          { name: 'IANDC', fullName: 'Information and Computation', url: 'http://dblp.uni-trier.de/db/journals/iandc/', level: 'A' },
          { name: 'SICOMP', fullName: 'SIAM Journal on Computing', url: 'http://dblp.uni-trier.de/db/journals/siamcomp/', level: 'A' }
        ],
        B: [
          { name: 'TALG', fullName: 'ACM Transactions on Algorithms', url: 'http://dblp.uni-trier.de/db/journals/talg/', level: 'B' },
          { name: 'TOCL', fullName: 'ACM Transactions on Computational Logic', url: 'http://dblp.uni-trier.de/db/journals/tocl/', level: 'B' },
          { name: 'TOMS', fullName: 'ACM Transactions on Mathematical Software', url: 'http://dblp.uni-trier.de/db/journals/toms/', level: 'B' },
          { name: 'Algorithmica', fullName: 'Algorithmica', url: 'http://dblp.uni-trier.de/db/journals/algorithmica/', level: 'B' },
          { name: 'CC', fullName: 'Computational Complexity', url: 'http://dblp.uni-trier.de/db/journals/cc/', level: 'B' },
          { name: 'FAC', fullName: 'Formal Aspects of Computing', url: 'http://dblp.uni-trier.de/db/journals/fac/', level: 'B' },
          { name: 'FMSD', fullName: 'Formal Methods in System Design', url: 'http://dblp.uni-trier.de/db/journals/fmsd/', level: 'B' },
          { name: 'INFORMS', fullName: 'INFORMS Journal on Computing', url: 'http://dblp.uni-trier.de/db/journals/informs/', level: 'B' },
          { name: 'JCSS', fullName: 'Journal of Computer and System Sciences', url: 'http://dblp.uni-trier.de/db/journals/jcss/', level: 'B' },
          { name: 'JGO', fullName: 'Journal of Global Optimization', url: 'http://dblp.uni-trier.de/db/journals/jgo/', level: 'B' },
          { name: 'JSC', fullName: 'Journal of Symbolic Computation', url: 'http://dblp.uni-trier.de/db/journals/jsc/', level: 'B' },
          { name: 'MSCS', fullName: 'Mathematical Structures in Computer Science', url: 'http://dblp.uni-trier.de/db/journals/mscs/', level: 'B' },
          { name: 'TCS', fullName: 'Theoretical Computer Science', url: 'http://dblp.uni-trier.de/db/journals/tcs/', level: 'B' }
        ],
        C: [
          { name: 'ACTA', fullName: 'Acta Informatica', url: 'http://dblp.uni-trier.de/db/journals/acta/', level: 'C' },
          { name: 'APAL', fullName: 'Annals of Pure and Applied Logic', url: 'http://dblp.uni-trier.de/db/journals/apal/', level: 'C' },
          { name: 'DAM', fullName: 'Discrete Applied Mathematics', url: 'http://dblp.uni-trier.de/db/journals/dam/', level: 'C' },
          { name: 'FUIN', fullName: 'Fundamenta Informaticae', url: 'http://dblp.uni-trier.de/db/journals/fuin/', level: 'C' },
          { name: 'LISP', fullName: 'Higher-Order and Symbolic Computation（2013年已停刊）', url: 'http://dblp.uni-trier.de/db/journals/lisp/', level: 'C' },
          { name: 'IPL', fullName: 'Information Processing Letters', url: 'http://dblp.uni-trier.de/db/journals/ipl/', level: 'C' },
          { name: 'JCOMPLEXITY', fullName: 'Journal of Complexity', url: 'http://dblp.uni-trier.de/db/journals/jc/', level: 'C' },
          { name: 'LOGCOM', fullName: 'Journal of Logic and Computation', url: 'http://dblp.uni-trier.de/db/journals/logcom/', level: 'C' },
          { name: 'JSL', fullName: 'The Journal of Symbolic Logic', url: 'http://dblp.uni-trier.de/db/journals/jsyml/', level: 'C' },
          { name: 'LMCS', fullName: 'Logical Methods in Computer Science', url: 'http://dblp.uni-trier.de/db/journals/lmcs/', level: 'C' },
          { name: 'SIDMA', fullName: 'SIAM Journal on Discrete Mathematics', url: 'http://dblp.uni-trier.de/db/journals/siamdm/', level: 'C' },
          { name: '', fullName: 'Theory of Computing Systems', url: 'http://dblp.uni-trier.de/db/journals/mst/', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'STOC', fullName: 'ACM Symposium on the Theory of Computing', url: 'http://dblp.uni-trier.de/db/conf/stoc/', level: 'A' },
          { name: 'SODA', fullName: 'ACM-SIAM Symposium on Discrete Algorithms', url: 'http://dblp.uni-trier.de/db/conf/soda/', level: 'A' },
          { name: 'CAV', fullName: 'International Conference on Computer Aided Verification', url: 'http://dblp.uni-trier.de/db/conf/cav/', level: 'A' },
          { name: 'FOCS', fullName: 'IEEE Annual Symposium on Foundations of Computer Science', url: 'http://dblp.uni-trier.de/db/conf/focs/', level: 'A' },
          { name: 'LICS', fullName: 'ACM/IEEE Symposium on Logic in Computer Science', url: 'http://dblp.uni-trier.de/db/conf/lics/', level: 'A' }
        ],
        B: [
          { name: 'SoCG', fullName: 'International Symposium on Computational Geometry', url: 'http://dblp.uni-trier.de/db/conf/compgeom/', level: 'B' },
          { name: 'ESA', fullName: 'European Symposium on Algorithms', url: 'http://dblp.uni-trier.de/db/conf/esa/', level: 'B' },
          { name: 'CCC', fullName: 'Conference on Computational Complexity', url: 'http://dblp.uni-trier.de/db/conf/coco/', level: 'B' },
          { name: 'ICALP', fullName: 'International Colloquium on Automata, Languages and Programming', url: 'http://dblp.uni-trier.de/db/conf/icalp/', level: 'B' },
          { name: '', fullName: 'International Conference on Automated Deduction/International Joint Conference on Automated Reasoning', url: 'http://dblp.uni-trier.de/db/conf/cade/', level: 'B' },
          { name: 'CONCUR', fullName: 'International Conference on Concurrency Theory', url: 'http://dblp.uni-trier.de/db/conf/concur/', level: 'B' },
          { name: 'HSCC', fullName: 'International Conference on Hybrid Systems: Computation and Control', url: 'http://dblp.uni-trier.de/db/conf/hybrid/', level: 'B' },
          { name: 'SAT', fullName: 'International Conference on Theory and Applications of Satisfiability Testing', url: 'http://dblp.uni-trier.de/db/conf/sat/', level: 'B' },
          { name: 'COCOON', fullName: 'International Computing and Combinatorics Conference', url: 'https://dblp.org/db/conf/cocoon/index.html', level: 'B' }
        ],
        C: [
          { name: 'CSL', fullName: 'Computer Science Logic', url: 'http://dblp.uni-trier.de/db/conf/csl/', level: 'C' },
          { name: 'FMCAD', fullName: 'Formal Methods in Computer-Aided Design', url: 'http://dblp.uni-trier.de/db/conf/fmcad/', level: 'C' },
          { name: 'FSTTCS', fullName: 'Foundations of Software Technology and Theoretical Computer Science', url: 'http://dblp.uni-trier.de/db/conf/fsttcs/', level: 'C' },
          { name: 'DSAA', fullName: 'IEEE International Conference on Data Science and Advanced Analytics', url: 'https://dblp.uni-trier.de/db/conf/dsaa/', level: 'C' },
          { name: 'ICTAC', fullName: 'International Colloquium on Theoretical Aspects of Computing', url: 'http://dblp.uni-trier.de/db/conf/ictac/', level: 'C' },
          { name: 'IPCO', fullName: 'International Conference on Integer Programming and Combinatorial Optimization', url: 'http://dblp.uni-trier.de/db/conf/ipco/', level: 'C' },
          { name: 'RTA', fullName: 'International Conference on Rewriting Techniques and Applications', url: 'http://dblp.uni-trier.de/db/conf/rta/', level: 'C' },
          { name: 'ISAAC', fullName: 'International Symposium on Algorithms and Computation', url: 'http://dblp.uni-trier.de/db/conf/isaac/', level: 'C' },
          { name: 'MFCS', fullName: 'International Conference on Mathematical Foundations of Computer Science', url: 'http://dblp.uni-trier.de/db/conf/mfcs/', level: 'C' },
          { name: 'STACS', fullName: 'Symposium on Theoretical Aspects of Computer Science', url: 'http://dblp.uni-trier.de/db/conf/stacs/', level: 'C' },
          { name: 'SETTA', fullName: 'International Symposium on Dependable Software Engineering: Theories, Tools, and Applications', url: 'https://dblp.org/db/conf/setta/index.html', level: 'C' }
        ]
      }
    },
    // 计算机图形学与多媒体
    graphics: {
      journal: {
        A: [
          { name: 'TOG', fullName: 'ACM Transactions on Graphics', url: 'http://dblp.uni-trier.de/db/journals/tog/', level: 'A' },
          { name: 'TIP', fullName: 'IEEE Transactions on Image Processing', url: 'http://dblp.uni-trier.de/db/journals/tip/', level: 'A' },
          { name: 'TVCG', fullName: 'IEEE Transactions on Visualization and Computer Graphics', url: 'http://dblp.uni-trier.de/db/journals/tvcg/', level: 'A' }
        ],
        B: [
          { name: 'TOMM', fullName: 'ACM Transactions on Multimedia Computing, Communications and Applications', url: 'http://dblp.uni-trier.de/db/journals/tomccap/', level: 'B' },
          { name: 'CAGD', fullName: 'Computer Aided Geometric Design', url: 'http://dblp.uni-trier.de/db/journals/cagd/', level: 'B' },
          { name: 'CGF', fullName: 'Computer Graphics Forum', url: 'http://dblp.uni-trier.de/db/journals/cgf/', level: 'B' },
          { name: 'CAD', fullName: 'Computer-Aided Design', url: 'http://dblp.uni-trier.de/db/journals/cad/', level: 'B' },
          { name: 'GM', fullName: 'Graphical Models', url: 'http://dblp.uni-trier.de/db/journals/cvgip/', level: 'B' },
          { name: 'TCSVT', fullName: 'IEEE Transactions on Circuits and Systems for Video Technology', url: 'http://dblp.uni-trier.de/db/journals/tcsv/', level: 'B' },
          { name: 'TMM', fullName: 'IEEE Transactions on Multimedia', url: 'http://dblp.uni-trier.de/db/journals/tmm/', level: 'B' },
          { name: 'JASA', fullName: 'The Journal of the Acoustical Society of America', url: 'http://scitation.aip.org/content/asa/journal/jasa', level: 'B' },
          { name: 'SIIMS', fullName: 'SIAM Journal on Imaging Sciences', url: 'http://dblp.uni-trier.de/db/journals/siamis/', level: 'B' },
          { name: 'SPECOM', fullName: 'Speech Communication', url: 'http://dblp.uni-trier.de/db/journals/speech/', level: 'B' }
        ],
        C: [
          { name: 'CGTA', fullName: 'Computational Geometry: Theory and Applications', url: 'http://dblp.uni-trier.de/db/journals/comgeo/', level: 'C' },
          { name: 'CAVW', fullName: 'computer animation & virtual worlds', url: 'https://dblp.org/db/journals/jvca/index.html', level: 'C' },
          { name: 'C&G', fullName: 'Computers & Graphics', url: 'http://dblp.uni-trier.de/db/journals/cg/', level: 'C' },
          { name: 'DCG', fullName: 'Discrete & Computational Geometry', url: 'http://dblp.uni-trier.de/db/journals/dcg/', level: 'C' },
          { name: 'SPL', fullName: 'IEEE Signal Processing Letters', url: 'http://dblp.uni-trier.de/db/journals/spl/', level: 'C' },
          { name: 'IET-IPR', fullName: 'IET Image Processing', url: 'http://dblp.uni-trier.de/db/journals/iet-ipr/', level: 'C' },
          { name: 'JVCIR', fullName: 'Journal of Visual Communication and Image Representation', url: 'http://dblp.uni-trier.de/db/journals/jvcir/', level: 'C' },
          { name: 'MS', fullName: 'Multimedia Systems', url: 'http://dblp.uni-trier.de/db/journals/mms/', level: 'C' },
          { name: 'MTA', fullName: 'Multimedia Tools and Applications', url: 'http://dblp.uni-trier.de/db/journals/mta/', level: 'C' },
          { name: 'SIGPRO', fullName: 'Signal Processing', url: 'http://dblp.uni-trier.de/db/journals/sigpro/', level: 'C' },
          { name: 'IMAGE', fullName: 'Signal Processing: Image Communication', url: 'http://dblp.uni-trier.de/db/journals/spic/', level: 'C' },
          { name: 'TVC', fullName: 'The Visual Computer', url: 'http://dblp.uni-trier.de/db/journals/vc/', level: 'C' },
          { name: 'CVMJ', fullName: 'Computational Visual Media', url: 'https://dblp.org/db/journals/cvm/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'ACM MM', fullName: 'ACM International Conference on Multimedia', url: 'http://dblp.uni-trier.de/db/conf/mm/', level: 'A' },
          { name: 'SIGGRAPH', fullName: 'ACM Special Interest Group on Computer Graphics', url: 'http://dblp.uni-trier.de/db/conf/siggraph/index.html', level: 'A' },
          { name: 'VR', fullName: 'IEEE Virtual Reality', url: 'http://dblp.uni-trier.de/db/conf/vr/', level: 'A' },
          { name: 'IEEE VIS', fullName: 'IEEE Visualization Conference', url: 'http://dblp.uni-trier.de/db/conf/visualization/index.html', level: 'A' }
        ],
        B: [
          { name: 'ICMR', fullName: 'ACM SIGMM International Conference on Multimedia Retrieval', url: 'http://dblp.uni-trier.de/db/conf/mir/', level: 'B' },
          { name: 'I3D', fullName: 'ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games', url: 'http://dblp.uni-trier.de/db/conf/si3d/', level: 'B' },
          { name: 'SCA', fullName: 'ACM SIGGRAPH/Eurographics Symposium on Computer Animation', url: 'http://dblp.uni-trier.de/db/conf/sca/index.html', level: 'B' },
          { name: 'DCC', fullName: 'Data Compression Conference', url: 'http://dblp.uni-trier.de/db/conf/dcc/', level: 'B' },
          { name: 'Eurographics', fullName: 'Annual Conference of the European Association for Computer Graphics', url: 'http://dblp.uni-trier.de/db/conf/eurographics/', level: 'B' },
          { name: 'EuroVis', fullName: 'Eurographics Conference on Visualization', url: 'http://dblp.uni-trier.de/db/conf/vissym/', level: 'B' },
          { name: 'SGP', fullName: 'Eurographics Symposium on Geometry Processing', url: 'http://dblp.uni-trier.de/db/conf/sgp/', level: 'B' },
          { name: 'EGSR', fullName: 'Eurographics Symposium on Rendering', url: 'http://dblp.uni-trier.de/db/conf/rt/', level: 'B' },
          { name: 'ICASSP', fullName: 'IEEE International Conference on Acoustics, Speech and Signal Processing', url: 'http://dblp.uni-trier.de/db/conf/icassp/', level: 'B' },
          { name: 'ICME', fullName: 'IEEE International Conference on Multimedia & Expo', url: 'http://dblp.uni-trier.de/db/conf/icmcs/', level: 'B' },
          { name: 'ISMAR', fullName: 'International Symposium on Mixed and Augmented Reality', url: 'http://dblp.uni-trier.de/db/conf/ismar/', level: 'B' },
          { name: 'PG', fullName: 'Pacific Conference on Computer Graphics and Applications', url: 'http://dblp.uni-trier.de/db/conf/pg/index.html', level: 'B' },
          { name: 'SPM', fullName: 'Symposium on Solid and Physical Modeling', url: 'http://dblp.uni-trier.de/db/conf/sma/', level: 'B' }
        ],
        C: [
          { name: 'VRST', fullName: 'ACM Symposium on Virtual Reality Software and Technology', url: 'http://dblp2.uni-trier.de/db/conf/vrst/', level: 'C' },
          { name: 'CASA', fullName: 'International Conference on Computer Animation and Social Agents', url: 'http://dblp.uni-trier.de/db/conf/ca/', level: 'C' },
          { name: 'CGI', fullName: 'Computer Graphics International', url: 'http://dblp.uni-trier.de/db/conf/cgi/', level: 'C' },
          { name: 'INTERSPEECH', fullName: 'Conference of the International Speech Communication Association', url: 'http://dblp.uni-trier.de/db/conf/interspeech/index.html', level: 'C' },
          { name: 'GMP', fullName: 'Geometric Modeling and Processing', url: 'http://dblp.uni-trier.de/db/conf/gmp/', level: 'C' },
          { name: 'PacificVis', fullName: 'IEEE Pacific Visualization Symposium', url: 'http://dblp.uni-trier.de/db/conf/apvis/', level: 'C' },
          { name: '3DV', fullName: 'International Conference on 3D Vision', url: 'https://dblp.uni-trier.de/db/conf/3dim/', level: 'C' },
          { name: 'CAD/Graphics', fullName: 'International Conference on Computer-Aided Design and Computer Graphics', url: 'https://dblp.uni-trier.de/db/conf/cadgraphics/', level: 'C' },
          { name: 'ICIP', fullName: 'IEEE International Conference on Image Processing', url: 'http://dblp.uni-trier.de/db/conf/icip/', level: 'C' },
          { name: 'MMM', fullName: 'International Conference on Multimedia Modeling', url: 'http://dblp.uni-trier.de/db/conf/mmm/index.html', level: 'C' },
          { name: 'MMAsia', fullName: 'ACM Multimedia Asia', url: 'https://dblp.uni-trier.de/db/conf/mmasia/index.html', level: 'C' },
          { name: 'SMI', fullName: 'Shape Modeling International', url: 'http://dblp.uni-trier.de/db/conf/smi/', level: 'C' },
          { name: 'ICVRV', fullName: 'International Conference on Virtual Reality and Visualization', url: 'https://www.computer.org/csdl/proceedings/1800579', level: 'C' },
          { name: 'CVM', fullName: 'Computational Visual Media', url: 'https://dblp.org/db/conf/cvm/index.html', level: 'C' },
          { name: 'PRCV', fullName: 'Chinese Conference on Pattern Recognition and Computer Vision (中国模式识别与计算机视觉大会)', url: 'https://dblp.org/db/conf/prcv/index.html', level: 'C' }
        ]
      }
    },
    // 人工智能
    ai: {
      journal: {
        A: [
          { name: 'AI', fullName: 'Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/journals/ai/', level: 'A' },
          { name: 'TPAMI', fullName: 'IEEE Transactions on Pattern Analysis and Machine Intelligence', url: 'http://dblp.uni-trier.de/db/journals/pami/', level: 'A' },
          { name: 'IJCV', fullName: 'International Journal of Computer Vision', url: 'http://dblp.uni-trier.de/db/journals/ijcv/', level: 'A' },
          { name: 'JMLR', fullName: 'Journal of Machine Learning Research', url: 'http://dblp.uni-trier.de/db/journals/jmlr/', level: 'A' }
        ],
        B: [
          { name: 'TAP', fullName: 'ACM Transactions on Applied Perception', url: 'http://dblp.uni-trier.de/db/journals/tap/', level: 'B' },
          { name: 'TSLP', fullName: 'ACM Transactions on Speech and Language (2013年已停刊)', url: 'http://dblp.uni-trier.de/db/journals/tslp/', level: 'B' },
          { name: 'AAMAS', fullName: 'Autonomous Agents and Multi-Agent Systems', url: 'http://dblp.uni-trier.de/db/journals/aamas/', level: 'B' },
          { name: '', fullName: 'Computational Linguistics', url: 'http://dblp.uni-trier.de/db/journals/coling/', level: 'B' },
          { name: 'CVIU', fullName: 'Computer Vision and Image Understanding', url: 'http://dblp.uni-trier.de/db/journals/cviu/', level: 'B' },
          { name: 'DKE', fullName: 'Data & Knowledge Engineering', url: 'http://dblp.uni-trier.de/db/journals/dke/index.html', level: 'B' },
          { name: '', fullName: 'Evolutionary Computation', url: 'http://dblp.uni-trier.de/db/journals/ec/', level: 'B' },
          { name: 'TAC', fullName: 'IEEE Transactions on Affective Computing', url: 'http://dblp.uni-trier.de/db/journals/taffco/', level: 'B' },
          { name: 'TASLP', fullName: 'IEEE/ACM Transactions on Audio, Speech and Language Processing', url: 'http://dblp.uni-trier.de/db/journals/taslp/', level: 'B' },
          { name: '', fullName: 'IEEE Transactions on Cybernetics', url: 'http://dblp.uni-trier.de/db/journals/tcyb/', level: 'B' },
          { name: 'TEC', fullName: 'IEEE Transactions on Evolutionary Computation', url: 'http://dblp.uni-trier.de/db/journals/tec/', level: 'B' },
          { name: 'TFS', fullName: 'IEEE Transactions on Fuzzy Systems', url: 'http://dblp.uni-trier.de/db/journals/tfs/', level: 'B' },
          { name: 'TNNLS', fullName: 'IEEE Transactions on Neural Networks and learning systems', url: 'http://dblp.uni-trier.de/db/journals/tnn/', level: 'B' },
          { name: 'IJAR', fullName: 'International Journal of Approximate Reasoning', url: 'http://dblp.uni-trier.de/db/journals/ijar/', level: 'B' },
          { name: 'JAIR', fullName: 'Journal of Artificial Intelligence Research', url: 'http://dblp.uni-trier.de/db/journals/jair/index.html', level: 'B' },
          { name: '', fullName: 'Journal of Automated Reasoning', url: 'http://dblp.uni-trier.de/db/journals/jar/', level: 'B' },
          { name: 'JSLHR', fullName: 'Journal of Speech, Language, and Hearing Research', url: 'http://jslhr.pubs.asha.org/', level: 'B' },
          { name: '', fullName: 'Machine Learning', url: 'http://dblp.uni-trier.de/db/journals/ml/', level: 'B' },
          { name: '', fullName: 'Neural Computation', url: 'http://dblp.uni-trier.de/db/journals/neco/', level: 'B' },
          { name: '', fullName: 'Neural Networks', url: 'http://dblp.uni-trier.de/db/journals/nn/', level: 'B' },
          { name: 'PR', fullName: 'Pattern Recognition', url: 'http://dblp.uni-trier.de/db/conf/par/', level: 'B' },
          { name: 'TACL', fullName: 'Transactions of the Association for Computational Linguistics', url: 'https://dblp.org/db/journals/tacl/index.html', level: 'B' }
        ],
        C: [
          { name: 'TALLIP', fullName: 'ACM Transactions on Asian and Low-Resource Language Information Processing', url: 'http://dblp.uni-trier.de/db/journals/talip/', level: 'C' },
          { name: '', fullName: 'Applied Intelligence', url: 'http://dblp.uni-trier.de/db/journals/apin/', level: 'C' },
          { name: 'AIM', fullName: 'Artificial Intelligence in Medicine', url: 'http://dblp.uni-trier.de/db/journals/artmed/', level: 'C' },
          { name: '', fullName: 'Artificial Life', url: 'http://dblp.uni-trier.de/db/journals/alife/', level: 'C' },
          { name: '', fullName: 'Computational Intelligence', url: 'http://dblp.uni-trier.de/db/journals/ci/', level: 'C' },
          { name: '', fullName: 'Computer Speech & Language', url: 'http://dblp.uni-trier.de/db/journals/csl/', level: 'C' },
          { name: '', fullName: 'Connection Science', url: 'http://dblp.uni-trier.de/db/journals/connection/', level: 'C' },
          { name: 'DSS', fullName: 'Decision Support Systems', url: 'http://dblp.uni-trier.de/db/journals/dss/', level: 'C' },
          { name: 'EAAI', fullName: 'Engineering Applications of Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/journals/eaai/', level: 'C' },
          { name: '', fullName: 'Expert Systems', url: 'http://dblp.uni-trier.de/db/journals/es/', level: 'C' },
          { name: 'ESWA', fullName: 'Expert Systems with Applications', url: 'http://dblp.uni-trier.de/db/journals/eswa/', level: 'C' },
          { name: '', fullName: 'Fuzzy Sets and Systems', url: 'http://dblp.uni-trier.de/db/journals/fss/', level: 'C' },
          { name: 'TG', fullName: 'IEEE Transactions on Games', url: 'http://dblp.uni-trier.de/db/journals/tciaig/', level: 'C' },
          { name: 'IET-CVI', fullName: 'IET Computer Vision', url: 'https://dblp.org/db/journals/iet-cvi/index.html', level: 'C' },
          { name: '', fullName: 'IET Signal Processing', url: 'https://dblp.org/db/journals/iet-spr/index.html', level: 'C' },
          { name: 'IVC', fullName: 'Image and Vision Computing', url: 'http://dblp.uni-trier.de/db/journals/ivc/', level: 'C' },
          { name: 'IDA', fullName: 'Intelligent Data Analysis', url: 'http://dblp.uni-trier.de/db/journals/ida/', level: 'C' },
          { name: 'IJCIA', fullName: 'International Journal of Computational Intelligence and Applications', url: 'http://dblp.uni-trier.de/db/journals/ijcia/', level: 'C' },
          { name: 'IJIS', fullName: 'International Journal of Intelligent Systems', url: 'http://dblp.uni-trier.de/db/journals/ijis/', level: 'C' },
          { name: 'IJNS', fullName: 'International Journal of Neural Systems', url: 'http://dblp.uni-trier.de/db/journals/ijns/', level: 'C' },
          { name: 'IJPRAI', fullName: 'International Journal of Pattern Recognition and Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/journals/ijprai/', level: 'C' },
          { name: 'IJUFKS', fullName: 'International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems', url: 'https://dblp.uni-trier.de/db/journals/ijufks/', level: 'C' },
          { name: 'IJDAR', fullName: 'International Journal on Document Analysis and Recognition', url: 'http://dblp.uni-trier.de/db/journals/ijdar/', level: 'C' },
          { name: 'JETAI', fullName: 'Journal of Experimental and Theoretical Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/journals/jetai/', level: 'C' },
          { name: 'KBS', fullName: 'Knowledge-Based Systems', url: 'http://dblp.uni-trier.de/db/journals/kbs/', level: 'C' },
          { name: '', fullName: 'Machine Translation', url: 'http://dblp.uni-trier.de/db/journals/mt/', level: 'C' },
          { name: '', fullName: 'Machine Vision and Applications', url: 'http://dblp.uni-trier.de/db/journals/mva/', level: 'C' },
          { name: '', fullName: 'Natural Computing', url: 'http://dblp.uni-trier.de/db/journals/nc/', level: 'C' },
          { name: 'NLE', fullName: 'Natural Language Engineering', url: 'http://dblp.uni-trier.de/db/journals/nle/', level: 'C' },
          { name: 'NCA', fullName: 'Neural Computing and Applications', url: 'http://dblp.uni-trier.de/db/journals/nca/', level: 'C' },
          { name: 'NPL', fullName: 'Neural Processing Letters', url: 'http://dblp.uni-trier.de/db/journals/npl/', level: 'C' },
          { name: '', fullName: 'Neurocomputing', url: 'http://dblp.uni-trier.de/db/journals/ijon/', level: 'C' },
          { name: 'PAA', fullName: 'Pattern Analysis and Applications', url: 'http://dblp.uni-trier.de/db/journals/paa/', level: 'C' },
          { name: 'PRL', fullName: 'Pattern Recognition Letters', url: 'http://dblp.uni-trier.de/db/journals/prl/', level: 'C' },
          { name: '', fullName: 'Soft Computing', url: 'http://dblp.uni-trier.de/db/journals/soco/', level: 'C' },
          { name: 'WI', fullName: 'Web Intelligence', url: 'http://dblp.uni-trier.de/db/journals/wias/', level: 'C' },
          { name: 'TIIS', fullName: 'ACM Transactions on Interactive Intelligent Systems', url: 'https://dblp.org/db/journals/tiis/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'AAAI', fullName: 'AAAI Conference on Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/aaai/', level: 'A' },
          { name: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', url: 'http://dblp.uni-trier.de/db/conf/nips/', level: 'A' },
          { name: 'ACL', fullName: 'Annual Meeting of the Association for Computational Linguistics', url: 'http://dblp.uni-trier.de/db/conf/acl/', level: 'A' },
          { name: 'CVPR', fullName: 'IEEE/CVF Computer Vision and Pattern Recognition Conference', url: 'http://dblp.uni-trier.de/db/conf/cvpr/', level: 'A' },
          { name: 'ICCV', fullName: 'International Conference on Computer Vision', url: 'http://dblp.uni-trier.de/db/conf/iccv/', level: 'A' },
          { name: 'ICML', fullName: 'International Conference on Machine Learning', url: 'http://dblp.uni-trier.de/db/conf/icml/', level: 'A' },
          { name: 'IJCAI', fullName: 'International Joint Conference on Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/ijcai/', level: 'A' }
        ],
        B: [
          { name: 'COLT', fullName: 'Annual Conference on Computational Learning Theory', url: 'http://dblp.uni-trier.de/db/conf/colt/', level: 'B' },
          { name: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', url: 'http://dblp.uni-trier.de/db/conf/emnlp/', level: 'B' },
          { name: 'ECAI', fullName: 'European Conference on Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/ecai/', level: 'B' },
          { name: 'ECCV', fullName: 'European Conference on Computer Vision', url: 'http://dblp.uni-trier.de/db/conf/eccv/', level: 'B' },
          { name: 'ICRA', fullName: 'IEEE International Conference on Robotics and Automation', url: 'http://dblp.uni-trier.de/db/conf/icra/', level: 'B' },
          { name: 'ICAPS', fullName: 'International Conference on Automated Planning and Scheduling', url: 'http://dblp.uni-trier.de/db/conf/aips/', level: 'B' },
          { name: 'ICCBR', fullName: 'International Conference on Case-Based Reasoning', url: 'http://dblp.uni-trier.de/db/conf/iccbr/', level: 'B' },
          { name: 'COLING', fullName: 'International Conference on Computational Linguistics', url: 'http://dblp.uni-trier.de/db/conf/coling/', level: 'B' },
          { name: 'KR', fullName: 'International Conference on Principles of Knowledge Representation and Reasoning', url: 'http://dblp.uni-trier.de/db/conf/kr/', level: 'B' },
          { name: 'UAI', fullName: 'Conference on Uncertainty in Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/uai/', level: 'B' },
          { name: 'AAMAS', fullName: 'International Joint Conference on Autonomous Agents and Multi-agent Systems', url: 'http://dblp.uni-trier.de/db/conf/atal/index.html', level: 'B' },
          { name: 'PPSN', fullName: 'Parallel Problem Solving from Nature', url: 'http://dblp.uni-trier.de/db/conf/ppsn/', level: 'B' },
          { name: 'NAACL', fullName: 'North American Chapter of the Association for Computational Linguistics', url: 'http://dblp.uni-trier.de/db/conf/naacl/', level: 'B' }
        ],
        C: [
          { name: 'AISTATS', fullName: 'International Conference on Artificial Intelligence and Statistics', url: 'http://dblp.uni-trier.de/db/conf/aistats/', level: 'C' },
          { name: 'ACCV', fullName: 'Asian Conference on Computer Vision', url: 'http://dblp.uni-trier.de/db/conf/accv/', level: 'C' },
          { name: 'ACML', fullName: 'Asian Conference on Machine Learning', url: 'http://dblp.uni-trier.de/db/conf/acml/', level: 'C' },
          { name: 'BMVC', fullName: 'British Machine Vision Conference', url: 'http://dblp.uni-trier.de/db/conf/bmvc/', level: 'C' },
          { name: 'NLPCC', fullName: 'CCF International Conference on Natural Language Processing and Chinese Computing', url: 'https://dblp.uni-trier.de/db/conf/nlpcc/', level: 'C' },
          { name: 'CoNLL', fullName: 'Conference on Computational Natural Language Learning', url: 'http://dblp.uni-trier.de/db/conf/conll', level: 'C' },
          { name: 'GECCO', fullName: 'Genetic and Evolutionary Computation Conference', url: 'http://dblp.uni-trier.de/db/conf/gecco/', level: 'C' },
          { name: 'ICTAI', fullName: 'IEEE International Conference on Tools with Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/ictai/', level: 'C' },
          { name: 'IROS', fullName: 'IEEE\\RSJ International Conference on Intelligent Robots and Systems', url: 'http://dblp.uni-trier.de/db/conf/iros/', level: 'C' },
          { name: 'ALT', fullName: 'International Conference on Algorithmic Learning Theory', url: 'http://dblp.uni-trier.de/db/conf/alt/', level: 'C' },
          { name: 'ICANN', fullName: 'International Conference on Artificial Neural Networks', url: 'http://dblp.uni-trier.de/db/conf/icann/', level: 'C' },
          { name: 'FG', fullName: 'IEEE International Conference on Automatic Face and Gesture Recognition', url: 'http://dblp.uni-trier.de/db/conf/fgr/', level: 'C' },
          { name: 'ICDAR', fullName: 'International Conference on Document Analysis and Recognition', url: 'http://dblp.uni-trier.de/db/conf/icdar/', level: 'C' },
          { name: 'ILP', fullName: 'International Conference on Inductive Logic Programming', url: 'http://dblp.uni-trier.de/db/conf/ilp/', level: 'C' },
          { name: 'KSEM', fullName: 'International conference on Knowledge Science, Engineering and Management', url: 'http://dblp.uni-trier.de/db/conf/ksem/', level: 'C' },
          { name: 'ICONIP', fullName: 'International Conference on Neural Information Processing', url: 'http://dblp.uni-trier.de/db/conf/iconip/', level: 'C' },
          { name: 'ICPR', fullName: 'International Conference on Pattern Recognition', url: 'http://dblp.uni-trier.de/db/conf/icpr/', level: 'C' },
          { name: 'IJCB', fullName: 'International Joint Conference on Biometrics', url: 'http://dblp.uni-trier.de/db/conf/icb/', level: 'C' },
          { name: 'IJCNN', fullName: 'International Joint Conference on Neural Networks', url: 'http://dblp.uni-trier.de/db/conf/ijcnn/', level: 'C' },
          { name: 'PRICAI', fullName: 'Pacific Rim International Conference on Artificial Intelligence', url: 'http://dblp.uni-trier.de/db/conf/pricai/', level: 'C' }
        ]
      }
    },
    // 人机交互与普适计算
    hci: {
      journal: {
        A: [
          { name: 'TOCHI', fullName: 'ACM Transactions on Computer-Human Interaction', url: 'http://dblp.uni-trier.de/db/journals/tochi/', level: 'A' },
          { name: 'IJHCS', fullName: 'International Journal of Human-Computer Studies', url: 'http://dblp.uni-trier.de/db/journals/ijmms/', level: 'A' }
        ],
        B: [
          { name: 'CSCW', fullName: 'Computer Supported Cooperative Work', url: 'http://dblp.uni-trier.de/db/journals/cscw/', level: 'B' },
          { name: 'HCI', fullName: 'Human-Computer Interaction', url: 'http://dblp.uni-trier.de/db/journals/hhci/', level: 'B' },
          { name: '', fullName: 'IEEE Transactions on Human-Machine Systems', url: 'http://dblp.uni-trier.de/db/journals/thms/', level: 'B' },
          { name: 'IWC', fullName: 'Interacting with Computers', url: 'http://dblp.uni-trier.de/db/journals/iwc/', level: 'B' },
          { name: 'IJHCI', fullName: 'International Journal of Human-Computer Interaction', url: 'http://dblp.uni-trier.de/db/journals/ijhci/', level: 'B' },
          { name: 'UMUAI', fullName: 'User Modeling and User-Adapted Interaction', url: 'http://dblp.uni-trier.de/db/journals/umuai/', level: 'B' },
          { name: 'TSMC', fullName: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems', url: 'https://dblp.org/db/journals/tsmc/tsmc12.html', level: 'B' }
        ],
        C: [
          { name: 'BIT', fullName: 'Behaviour & Information Technology', url: 'http://dblp.uni-trier.de/db/journals/behaviourIT/', level: 'C' },
          { name: 'PUC', fullName: 'Personal and Ubiquitous Computing', url: 'http://dblp.uni-trier.de/db/journals/puc/', level: 'C' },
          { name: 'PMC', fullName: 'Pervasive and Mobile Computing', url: 'http://dblp.uni-trier.de/db/journals/percom/', level: 'C' },
          { name: 'PACMHCI', fullName: 'Proceedings of the ACM on Human-Computer Interaction', url: 'https://dblp.org/db/journals/pacmhci/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'CSCW', fullName: 'ACM Conference On Computer-Supported Cooperative Work And Social Computing', url: 'http://dblp.uni-trier.de/db/conf/cscw', level: 'A' },
          { name: 'CHI', fullName: 'ACM Conference on Human Factors in Computing Systems', url: 'http://dblp.uni-trier.de/db/conf/chi', level: 'A' },
          { name: 'UbiComp', fullName: 'ACM international joint conference on Pervasive and Ubiquitous Computing', url: 'http://dblp.uni-trier.de/db/conf/huc/', level: 'A' },
          { name: 'UIST', fullName: 'ACM Symposium on User Interface Software and Technology', url: 'http://dblp.uni-trier.de/db/conf/uist/', level: 'A' }
        ],
        B: [
          { name: 'GROUP', fullName: 'ACM International Conference on Supporting Group Work', url: 'http://dblp.uni-trier.de/db/conf/group/', level: 'B' },
          { name: 'IUI', fullName: 'ACM International Conference on Intelligent User Interfaces', url: 'http://dblp.uni-trier.de/db/conf/iui/', level: 'B' },
          { name: 'ITS', fullName: 'ACM International Conference on Interactive Tabletops and Surfaces', url: 'http://dblp.uni-trier.de/db/conf/tabletop/', level: 'B' },
          { name: 'ECSCW', fullName: 'European Conference on Computer Supported Cooperative Work', url: 'http://dblp.uni-trier.de/db/conf/ecscw/', level: 'B' },
          { name: 'PERCOM', fullName: 'IEEE International Conference on Pervasive Computing and Communications', url: 'http://dblp.uni-trier.de/db/conf/percom/', level: 'B' },
          { name: 'MobileHCI', fullName: 'ACM International Conference on Mobile Human-Computer Interaction', url: 'http://dblp.uni-trier.de/db/conf/mhci/', level: 'B' },
          { name: 'ICWSM', fullName: 'The International AAAI Conference on Web and Social Media', url: 'https://dblp.org/db/conf/icwsm/index.html', level: 'B' }
        ],
        C: [
          { name: 'DIS', fullName: 'ACM SIGCHI Conference on Designing Interactive Systems', url: 'http://dblp.uni-trier.de/db/conf/ACMdis', level: 'C' },
          { name: 'ICMI', fullName: 'ACM International Conference on Multimodal Interaction', url: 'http://dblp.uni-trier.de/db/conf/icmi/', level: 'C' },
          { name: 'ASSETS', fullName: 'International ACM SIGACCESS Conference on Computers and Accessibility', url: 'http://dblp.uni-trier.de/db/conf/assets', level: 'C' },
          { name: 'GI', fullName: 'Graphics Interface', url: 'http://dblp.uni-trier.de/db/conf/graphicsinterface/', level: 'C' },
          { name: 'UIC', fullName: 'IEEE International Conference on Ubiquitous Intelligence and Computing', url: 'http://dblp.uni-trier.de/db/conf/uic/', level: 'C' },
          { name: '', fullName: 'IEEE World Haptics Conference', url: 'http://dblp.uni-trier.de/db/conf/haptics/', level: 'C' },
          { name: 'INTERACT', fullName: 'International Conference on Human-Computer Interaction of International Federation for Information Processing', url: 'http://dblp.uni-trier.de/db/conf/interact/', level: 'C' },
          { name: 'IDC', fullName: 'ACM Interaction Design and Children', url: 'http://dblp.uni-trier.de/db/conf/acmidc/', level: 'C' },
          { name: 'CollaborateCom', fullName: 'International Conference on Collaborative Computing: Networking, Applications and Worksharing', url: 'https://dblp.uni-trier.de/db/conf/colcom/', level: 'C' },
          { name: 'CSCWD', fullName: 'International Conference on Computer Supported Cooperative Work in Design', url: 'http://dblp.uni-trier.de/db/conf/cscwd/', level: 'C' },
          { name: 'CoopIS', fullName: 'International Conference on Cooperative Information Systems', url: 'http://dblp.uni-trier.de/db/conf/coopis/', level: 'C' },
          { name: 'MobiQuitous', fullName: 'International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services', url: 'http://dblp.uni-trier.de/db/conf/mobiquitous/', level: 'C' },
          { name: 'AVI', fullName: 'International Working Conference on Advanced Visual Interfaces', url: 'http://dblp.uni-trier.de/db/conf/avi/', level: 'C' }
        ]
      }
    },
    // 交叉/综合/新兴
    interdisciplinary: {
      journal: {
        A: [
          { name: 'JACM', fullName: 'Journal of the ACM', url: 'http://dblp.uni-trier.de/db/journals/jacm/', level: 'A' },
          { name: 'Proc. IEEE', fullName: 'Proceedings of the IEEE', url: 'http://dblp.uni-trier.de/db/journals/pieee/', level: 'A' },
          { name: 'SCIS', fullName: 'Science China Information Sciences', url: 'http://dblp.uni-trier.de/db/journals/chinaf/', level: 'A' }
        ],
        B: [
          { name: '', fullName: 'Bioinformatics', url: 'http://dblp.uni-trier.de/db/journals/bioinformatics/', level: 'B' },
          { name: '', fullName: 'Briefings in Bioinformatics', url: 'http://dblp.uni-trier.de/db/journals/bib/', level: 'B' },
          { name: 'Cognition', fullName: 'Cognition', url: 'http://www.journals.elsevier.com/cognition/', level: 'B' },
          { name: 'TASAE', fullName: 'IEEE Transactions on Automation Science and Engineering', url: 'http://dblp.uni-trier.de/db/journals/tase/', level: 'B' },
          { name: 'TGARS', fullName: 'IEEE Transactions on Geoscience and Remote Sensing', url: 'http://dblp.uni-trier.de/db/journals/tgrs/', level: 'B' },
          { name: 'TITS', fullName: 'IEEE Transactions on Intelligent Transportation Systems', url: 'http://dblp.uni-trier.de/db/journals/tits/', level: 'B' },
          { name: 'TMI', fullName: 'IEEE Transactions on Medical Imaging', url: 'http://dblp.uni-trier.de/db/journals/tmi/', level: 'B' },
          { name: 'TR', fullName: 'IEEE Transactions on Robotics', url: 'http://dblp.uni-trier.de/db/journals/trob/', level: 'B' },
          { name: 'TCBB', fullName: 'IEEE/ACM Transactions on Computational Biology and Bioinformatics', url: 'http://dblp.uni-trier.de/db/journals/tcbb/', level: 'B' },
          { name: 'JCST', fullName: 'Journal of Computer Science and Technology', url: 'http://dblp.uni-trier.de/db/journals/jcst/', level: 'B' },
          { name: 'JAMIA', fullName: 'Journal of the American Medical Informatics Association', url: 'http://dblp.uni-trier.de/db/journals/jamia/', level: 'B' },
          { name: '', fullName: 'PLOS Computational Biology', url: 'http://dblp.uni-trier.de/db/journals/ploscb/', level: 'B' },
          { name: '', fullName: 'The Computer Journal', url: 'http://dblp.uni-trier.de/db/journals/cj/', level: 'B' },
          { name: 'WWW', fullName: 'World Wide Web', url: 'https://dblp.org/db/journals/www/index.html', level: 'B' },
          { name: 'FCS', fullName: 'Frontiers of Computer Science', url: 'http://dblp.uni-trier.de/db/journals/fcsc/', level: 'B' }
        ],
        C: [
          { name: '', fullName: 'BMC Bioinformatics', url: 'http://dblp.uni-trier.de/db/journals/bmcbi/', level: 'C' },
          { name: '', fullName: 'Cybernetics and Systems', url: 'http://dblp.uni-trier.de/db/journals/cas/', level: 'C' },
          { name: '', fullName: 'IEEE Geoscience and Remote Sensing Letters', url: 'http://dblp.uni-trier.de/db/journals/lgrs/', level: 'C' },
          { name: 'JBHI', fullName: 'IEEE Journal of Biomedical and Health Informatics', url: 'http://dblp.uni-trier.de/db/journals/titb/', level: 'C' },
          { name: 'TBD', fullName: 'IEEE Transactions on Big Data', url: 'https://dblp.uni-trier.de/db/journals/tbd/', level: 'C' },
          { name: '', fullName: 'IET Intelligent Transport Systems', url: 'http://digital-library.theiet.org/content/journals/iet-its', level: 'C' },
          { name: 'JBI', fullName: 'Journal of Biomedical Informatics', url: 'https://dblp.uni-trier.de/db/journals/jbi/', level: 'C' },
          { name: '', fullName: 'Medical Image Analysis', url: 'http://dblp.uni-trier.de/db/journals/mia/', level: 'C' },
          { name: 'TII', fullName: 'IEEE Transactions on Industrial Informatics', url: 'https://dblp.org/db/journals/tii/index.html', level: 'C' },
          { name: 'TCPS', fullName: 'ACM Transactions on Cyber-Physical Systems', url: 'https://dblp.org/db/journals/tcps/index.html', level: 'C' },
          { name: 'TOCE', fullName: 'ACM Transactions on Computing Education', url: 'https://dblp.org/db/journals/jeric/index.html', level: 'C' },
          { name: 'FITEE', fullName: 'Frontiers of Information Technology & Electronic Engineering', url: 'https://dblp.org/db/journals/jzusc/index.html', level: 'C' },
          { name: 'TCSS', fullName: 'IEEE Transactions on Computational Social Systems', url: 'https://dblp.org/db/journals/tcss/index.html', level: 'C' },
          { name: '', fullName: 'IEEE Transactions on Reliability', url: 'https://dblp.org/db/journals/tr/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'WWW', fullName: 'International World Wide Web Conference', url: 'http://dblp.uni-trier.de/db/conf/www/', level: 'A' },
          { name: 'RTSS', fullName: 'IEEE Real-Time Systems Symposium', url: 'http://dblp.uni-trier.de/db/conf/rtss/', level: 'A' },
          { name: 'WINE', fullName: 'Conference on Web and Internet Economics', url: 'https://dblp.org/db/conf/wine/index.html', level: 'A' }
        ],
        B: [
          { name: 'CogSci', fullName: 'Annual Meeting of the Cognitive Science Society', url: 'https://dblp.uni-trier.de/db/conf/cogsci/', level: 'B' },
          { name: 'BIBM', fullName: 'IEEE International Conference on Bioinformatics and Biomedicine', url: 'http://dblp.uni-trier.de/db/conf/bibm/', level: 'B' },
          { name: 'EMSOFT', fullName: 'International Conference on Embedded Software', url: 'http://dblp.uni-trier.de/db/conf/emsoft/', level: 'B' },
          { name: 'ISMB', fullName: 'International conference on Intelligent Systems for Molecular Biology', url: 'https://dblp.org/db/conf/ismb/index.html', level: 'B' },
          { name: 'RECOMB', fullName: 'Annual International Conference on Research in Computational Molecular Biology', url: 'http://dblp.uni-trier.de/db/conf/recomb/', level: 'B' },
          { name: 'MICCAI', fullName: 'International Conference on Medical Image Computing and Computer-Assisted Intervention', url: 'https://dblp.org/db/conf/miccai/index.html', level: 'B' }
        ],
        C: [
          { name: 'AMIA', fullName: 'American Medical Informatics Association Annual Symposium', url: 'http://dblp.uni-trier.de/db/conf/amia/', level: 'C' },
          { name: 'APBC', fullName: 'Asia Pacific Bioinformatics Conference', url: 'http://dblp.uni-trier.de/db/conf/apbc/', level: 'C' },
          { name: 'IEEE BigData', fullName: 'IEEE International Conference on Big Data', url: 'https://dblp.uni-trier.de/db/conf/bigdataconf/', level: 'C' },
          { name: 'IEEE CLOUD', fullName: 'IEEE International Conference on Cloud Computing', url: 'http://dblp.uni-trier.de/db/conf/IEEEcloud/', level: 'C' },
          { name: 'SMC', fullName: 'IEEE International Conference on Systems, Man, and Cybernetics', url: 'https://dblp.uni-trier.de/db/conf/smc/', level: 'C' },
          { name: 'COSIT', fullName: 'International Conference on Spatial Information Theory', url: 'http://dblp.uni-trier.de/db/conf/cosit/', level: 'C' },
          { name: 'ISBRA', fullName: 'International Symposium on Bioinformatics Research and Applications', url: 'https://dblp.uni-trier.de/db/conf/isbra/', level: 'C' },
          { name: 'SAGT', fullName: 'International Symposium on Algorithmic Game Theory', url: 'https://dblp.org/db/conf/sagt/index.html', level: 'C' },
          { name: 'SIGSPATIAL', fullName: 'ACM Special Interest Group on Spatial Information', url: 'https://dblp.org/db/journals/sigspatial/index.html', level: 'C' },
          { name: 'ICIC', fullName: 'International Conference on Intelligent Computing', url: 'https://dblp.org/db/conf/icic/index.html', level: 'C' }
        ]
      }
    }
  }
}

// 解析HTML文件中的数据（保留用于未来扩展）
export async function parseHTMLData() {
  try {
    const response = await fetch('/中国计算机学会推荐国际学术会议和期刊目录- 2022.html')
    const htmlText = await response.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlText, 'text/html')
    const tables = doc.querySelectorAll('table')
    return parseTables(tables)
  } catch (error) {
    console.error('解析HTML文件失败:', error)
    return getSampleData()
  }
}

function parseTables(tables) {
  const data = {}
  categories.forEach(category => {
    data[category.id] = {
      conference: { A: [], B: [], C: [] },
      journal: { A: [], B: [], C: [] }
    }
  })
  return data
}
