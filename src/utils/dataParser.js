// 数据解析工具
// 根据《中国计算机学会推荐国际学术会议和期刊目录-2022》填充

import { getThcplLevel } from './thcplData.js'
import { getCasPartition } from './casData.js'

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
  const data = {
    // 计算机体系结构/并行与分布计算/存储系统
    architecture: {
      journal: {
        A: [
          { name: 'TOCS', fullName: 'ACM Transactions on Computer Systems', url: 'https://dblp.uni-trier.de/db/journals/tocs/index.html', level: 'A' },
          { name: 'TOS', fullName: 'ACM Transactions on Storage', url: 'https://dblp.uni-trier.de/db/journals/tos/index.html', level: 'A' },
          { name: 'TCAD', fullName: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems', url: 'https://dblp.uni-trier.de/db/journals/tcad/index.html', level: 'A' },
          { name: 'TC', fullName: 'IEEE Transactions on Computers', url: 'https://dblp.uni-trier.de/db/journals/tc/index.html', level: 'A' },
          { name: 'TPDS', fullName: 'IEEE Transactions on Parallel and Distributed Systems', url: 'https://dblp.uni-trier.de/db/journals/tpds/index.html', level: 'A' },
          { name: 'TACO', fullName: 'ACM Transactions on Architecture and Code Optimization', url: 'https://dblp.uni-trier.de/db/journals/taco/index.html', level: 'A' }
        ],
        B: [
          { name: 'TAAS', fullName: 'ACM Transactions on Autonomous and Adaptive Systems', url: 'https://dblp.uni-trier.de/db/journals/taas/index.html', level: 'B' },
          { name: 'TODAES', fullName: 'ACM Transactions on Design Automation of Electronic Systems', url: 'https://dblp.uni-trier.de/db/journals/todaes/index.html', level: 'B' },
          { name: 'TECS', fullName: 'ACM Transactions on Embedded Computing Systems', url: 'https://dblp.uni-trier.de/db/journals/tecs/index.html', level: 'B' },
          { name: 'TRETS', fullName: 'ACM Transactions on Reconfigurable Technology and Systems', url: 'https://dblp.uni-trier.de/db/journals/trets/index.html', level: 'B' },
          { name: 'TVLSI', fullName: 'IEEE Transactions on Very Large Scale Integration (VLSI) Systems', url: 'https://dblp.uni-trier.de/db/journals/tvlsi/index.html', level: 'B' },
          { name: 'JPDC', fullName: 'Journal of Parallel and Distributed Computing', url: 'https://dblp.uni-trier.de/db/journals/jpdc/index.html', level: 'B' },
          { name: 'JSA', fullName: 'Journal of Systems Architecture: Embedded Software Design', url: 'https://dblp.uni-trier.de/db/journals/jsa/index.html', level: 'B' },
          { name: '', fullName: 'Parallel Computing', url: 'https://dblp.org/db/journals/pc/index.html', level: 'B' },
          { name: '', fullName: 'Performance Evaluation: An International Journal', url: 'https://dblp.org/db/journals/pe/index.html', level: 'B' }
        ],
        C: [
          { name: 'JETC', fullName: 'ACM Journal on Emerging Technologies in Computing Systems', url: 'https://dblp.uni-trier.de/db/journals/jetc/index.html', level: 'C' },
          { name: '', fullName: 'Concurrency and Computation: Practice and Experience', url: 'https://dblp.uni-trier.de/db/journals/concurrency/index.html', level: 'C' },
          { name: 'DC', fullName: 'Distributed Computing', url: 'https://dblp.uni-trier.de/db/journals/dc/index.html', level: 'C' },
          { name: 'FGCS', fullName: 'Future Generation Computer Systems', url: 'https://dblp.uni-trier.de/db/journals/fgcs/index.html', level: 'C' },
          { name: 'TCC (J)', fullName: 'IEEE Transactions on Cloud Computing', url: 'https://dblp.uni-trier.de/db/journals/tcc/index.html', level: 'C' },
          { name: 'Integration', fullName: 'Integration, the VLSI Journal', url: 'https://dblp.uni-trier.de/db/journals/integration/index.html', level: 'C' },
          { name: 'JETTA', fullName: 'Journal of Electronic Testing-Theory and Applications', url: 'https://dblp.org/db/journals/et/index.html', level: 'C' },
          { name: 'JGC', fullName: 'Journal of Grid computing', url: 'https://dblp.uni-trier.de/db/journals/grid/index.html', level: 'C' },
          { name: 'MICPRO', fullName: 'Microprocessors and Microsystems: Embedded Hardware-Design', url: 'https://dblp.uni-trier.de/db/journals/mam/index.html', level: 'C' },
          { name: 'RTS', fullName: 'Real-Time Systems', url: 'https://dblp.uni-trier.de/db/journals/rts/index.html', level: 'C' },
          { name: 'TJSC', fullName: 'The Journal of Supercomputing', url: 'https://dblp.uni-trier.de/db/journals/tjs/index.html', level: 'C' },
          { name: 'TCASI', fullName: 'IEEE Transactions on Circuits and Systems I: Regular Papers', url: 'https://dblp.org/db/journals/tcasI/index.html', level: 'C' },
          { name: 'CCF-THPC', fullName: 'CCF Transactions on High Performance Computing', url: 'https://dblp.org/db/journals/ccfthpc/index.html', level: 'C' },
          { name: 'TSUSC', fullName: 'IEEE Transactions on Sustainable Computing', url: 'https://dblp.org/db/journals/tsusc/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'PPoPP', fullName: 'ACM SIGPLAN Symposium on Principles & Practice of Parallel Programming', url: 'https://dblp.uni-trier.de/db/conf/ppopp/index.html', level: 'A' },
          { name: 'FAST', fullName: 'USENIX Conference on File and Storage Technologies', url: 'https://dblp.uni-trier.de/db/conf/fast/index.html', level: 'A' },
          { name: 'DAC', fullName: 'Design Automation Conference', url: 'https://dblp.uni-trier.de/db/conf/dac/index.html', level: 'A' },
          { name: 'HPCA', fullName: 'IEEE International Symposium on High Performance Computer Architecture', url: 'https://dblp.uni-trier.de/db/conf/hpca/index.html', level: 'A' },
          { name: 'MICRO', fullName: 'IEEE/ACM International Symposium on Microarchitecture', url: 'https://dblp.uni-trier.de/db/conf/micro/index.html', level: 'A' },
          { name: 'SC', fullName: 'International Conference for High Performance Computing, Networking, Storage, and Analysis', url: 'https://dblp.uni-trier.de/db/conf/sc/index.html', level: 'A' },
          { name: 'ASPLOS', fullName: 'International Conference on Architectural Support for Programming Languages and Operating Systems', url: 'https://dblp.uni-trier.de/db/conf/asplos/index.html', level: 'A' },
          { name: 'ISCA', fullName: 'International Symposium on Computer Architecture', url: 'https://dblp.uni-trier.de/db/conf/isca/index.html', level: 'A' },
          { name: 'USENIX ATC', fullName: 'USENIX Annual Technical Conference', url: 'https://dblp.uni-trier.de/db/conf/usenix/index.html', level: 'A' },
          { name: 'EuroSys', fullName: 'European Conference on Computer Systems', url: 'https://dblp.uni-trier.de/db/conf/eurosys/index.html', level: 'A' }
        ],
        B: [
          { name: 'SoCC', fullName: 'ACM Symposium on Cloud Computing', url: 'https://dblp.uni-trier.de/db/conf/cloud/index.html', level: 'B' },
          { name: 'SPAA', fullName: 'ACM Symposium on Parallelism in Algorithms and Architectures', url: 'https://dblp.uni-trier.de/db/conf/spaa/index.html', level: 'B' },
          { name: 'PODC', fullName: 'ACM Symposium on Principles of Distributed Computing', url: 'https://dblp.uni-trier.de/db/conf/podc/index.html', level: 'B' },
          { name: 'FPGA', fullName: 'ACM/SIGDA International Symposium on Field-Programmable Gate Arrays', url: 'https://dblp.uni-trier.de/db/conf/fpga/index.html', level: 'B' },
          { name: 'CGO', fullName: 'The International Symposium on Code Generation and Optimization', url: 'https://dblp.uni-trier.de/db/conf/cgo/index.html', level: 'B' },
          { name: 'DATE', fullName: 'Design, Automation & Test in Europe', url: 'https://dblp.uni-trier.de/db/conf/date/index.html', level: 'B' },
          { name: 'HOT CHIPS', fullName: 'Hot Chips: A Symposium on High Performance Chips', url: 'https://dblp.org/db/conf/hotchips/index.html', level: 'B' },
          { name: 'CLUSTER', fullName: 'IEEE International Conference on Cluster Computing', url: 'https://dblp.uni-trier.de/db/conf/cluster/index.html', level: 'B' },
          { name: 'ICCD', fullName: 'International Conference on Computer Design', url: 'https://dblp.uni-trier.de/db/conf/iccd/index.html', level: 'B' },
          { name: 'ICCAD', fullName: 'International Conference on Computer-Aided Design', url: 'https://dblp.uni-trier.de/db/conf/iccad/index.html', level: 'B' },
          { name: 'ICDCS', fullName: 'IEEE International Conference on Distributed Computing Systems', url: 'https://dblp.uni-trier.de/db/conf/icdcs/index.html', level: 'B' },
          { name: 'CODES+ISSS', fullName: 'International Conference on Hardware/Software Co-design and System Synthesis', url: 'https://dblp.uni-trier.de/db/conf/codesisss/index.html', level: 'B' },
          { name: 'HiPEAC', fullName: 'International Conference on High Performance and Embedded Architectures and Compilers', url: 'https://dblp.uni-trier.de/db/conf/hipeac/index.html', level: 'B' },
          { name: 'SIGMETRICS', fullName: 'International Conference on Measurement and Modeling of Computer Systems', url: 'https://dblp.uni-trier.de/db/conf/sigmetrics/index.html', level: 'B' },
          { name: 'PACT', fullName: 'International Conference on Parallel Architectures and Compilation Techniques', url: 'https://dblp.uni-trier.de/db/conf/IEEEpact/index.html', level: 'B' },
          { name: 'ICPP', fullName: 'International Conference on Parallel Processing', url: 'https://dblp.uni-trier.de/db/conf/icpp/index.html', level: 'B' },
          { name: 'ICS', fullName: 'International Conference on Supercomputing', url: 'https://dblp.uni-trier.de/db/conf/ics/index.html', level: 'B' },
          { name: 'VEE', fullName: 'International Conference on Virtual Execution Environments', url: 'https://dblp.uni-trier.de/db/conf/vee/index.html', level: 'B' },
          { name: 'IPDPS', fullName: 'IEEE International Parallel & Distributed Processing Symposium', url: 'https://dblp.uni-trier.de/db/conf/ipps/index.html', level: 'B' },
          { name: 'Performance', fullName: 'International Symposium on Computer Performance, Modeling, Measurements and Evaluation', url: 'https://dblp.uni-trier.de/db/conf/performance/index.html', level: 'B' },
          { name: 'HPDC', fullName: 'The International ACM Symposium on High-Performance Parallel and Distributed Computing', url: 'https://dblp.uni-trier.de/db/conf/hpdc/index.html', level: 'B' },
          { name: 'ITC', fullName: 'International Test Conference', url: 'https://dblp.uni-trier.de/db/conf/itc/index.html', level: 'B' },
          { name: 'LISA', fullName: 'Large Installation System Administration Conference', url: 'https://dblp.uni-trier.de/db/conf/lisa/index.html', level: 'B' },
          { name: 'MSST', fullName: 'Mass Storage Systems and Technologies', url: 'https://dblp.uni-trier.de/db/conf/mss/index.html', level: 'B' },
          { name: 'RTAS', fullName: 'IEEE Real-Time and Embedded Technology and Applications Symposium', url: 'https://dblp.uni-trier.de/db/conf/rtas/index.html', level: 'B' },
          { name: 'Euro-Par', fullName: 'European Conference on Parallel and Distributed Computing', url: 'https://dblp.uni-trier.de/db/conf/europar/index.html', level: 'B' }
        ],
        C: [
          { name: 'CF', fullName: 'ACM International Conference on Computing Frontiers', url: 'https://dblp.uni-trier.de/db/conf/cf', level: 'C' },
          { name: 'SYSTOR', fullName: 'ACM International Systems and Storage Conference', url: 'https://dblp.uni-trier.de/db/conf/systor/index.html', level: 'C' },
          { name: 'NOCS', fullName: 'ACM/IEEE International Symposium on Networks-on-Chip', url: 'https://dblp.uni-trier.de/db/conf/nocs', level: 'C' },
          { name: 'ASAP', fullName: 'IEEE International Conference on Application-Specific Systems, Architectures, and Processors', url: 'https://dblp.uni-trier.de/db/conf/asap', level: 'C' },
          { name: 'ASP-DAC', fullName: 'Asia and South Pacific Design Automation Conference', url: 'https://dblp.uni-trier.de/db/conf/aspdac', level: 'C' },
          { name: 'ETS', fullName: 'IEEE European Test Symposium', url: 'https://dblp.uni-trier.de/db/conf/ets/index.html', level: 'C' },
          { name: 'FPL', fullName: 'International Conference on Field-Programmable Logic and Applications', url: 'https://dblp.uni-trier.de/db/conf/fpl/index.html', level: 'C' },
          { name: 'FCCM', fullName: 'IEEE Symposium on Field-Programmable Custom Computing Machines', url: 'https://dblp.uni-trier.de/db/conf/fccm/index.html', level: 'C' },
          { name: 'GLSVLSI', fullName: 'Great Lakes Symposium on VLSI', url: 'https://dblp.uni-trier.de/db/conf/glvlsi/index.html', level: 'C' },
          { name: 'ATS', fullName: 'IEEE Asian Test Symposium', url: 'https://dblp.uni-trier.de/db/conf/ats/index.html', level: 'C' },
          { name: 'HPCC', fullName: 'IEEE International Conference on High Performance Computing and Communications', url: 'https://dblp.uni-trier.de/db/conf/hpcc/index.html', level: 'C' },
          { name: 'HiPC', fullName: 'IEEE International Conference on High Performance Computing, Data and Analytics', url: 'https://dblp.uni-trier.de/db/conf/hipc/index.html', level: 'C' },
          { name: 'MASCOTS', fullName: 'International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems', url: 'https://dblp.uni-trier.de/db/conf/mascots/index.html', level: 'C' },
          { name: 'ISPA', fullName: 'IEEE International Symposium on Parallel and Distributed Processing with Applications', url: 'https://dblp.uni-trier.de/db/conf/ispa/index.html', level: 'C' },
          { name: 'CCGRID', fullName: 'IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing', url: 'https://dblp.uni-trier.de/db/conf/ccgrid/index.html', level: 'C' },
          { name: 'NPC', fullName: 'IFIP International Conference on Network and Parallel Computing', url: 'https://dblp.uni-trier.de/db/conf/npc/index.html', level: 'C' },
          { name: 'ICA3PP', fullName: 'International Conference on Algorithms and Architectures for Parallel Processing', url: 'https://dblp.uni-trier.de/db/conf/ica3pp/index.html', level: 'C' },
          { name: 'CASES', fullName: 'International Conference on Compilers, Architectures, and Synthesis for Embedded Systems', url: 'https://dblp.uni-trier.de/db/conf/cases/index.html', level: 'C' },
          { name: 'FPT', fullName: 'International Conference on Field-Programmable Technology', url: 'https://dblp.uni-trier.de/db/conf/fpt/index.html', level: 'C' },
          { name: 'ICPADS', fullName: 'International Conference on Parallel and Distributed Systems', url: 'https://dblp.uni-trier.de/db/conf/icpads/index.html', level: 'C' },
          { name: 'ISCAS', fullName: 'IEEE International Symposium on Circuits and Systems', url: 'https://dblp.uni-trier.de/db/conf/iscas/index.html', level: 'C' },
          { name: 'ISLPED', fullName: 'International Symposium on Low Power Electronics and Design', url: 'https://dblp.uni-trier.de/db/conf/islped/index.html', level: 'C' },
          { name: 'ISPD', fullName: 'International Symposium on Physical Design', url: 'https://dblp.uni-trier.de/db/conf/ispd/index.html', level: 'C' },
          { name: 'HOTI', fullName: 'IEEE Symposium on High-Performance Interconnects', url: 'https://dblp.uni-trier.de/db/conf/hoti/index.html', level: 'C' },
          { name: 'VTS', fullName: 'IEEE VLSI Test Symposium', url: 'https://dblp.uni-trier.de/db/conf/vts/index.html', level: 'C' },
          { name: 'ITC-Asia', fullName: 'International Test Conference in Asia', url: 'https://dblp.org/db/conf/itc-asia/index.html', level: 'C' }
        ]
      }
    },
    // 计算机网络
    network: {
      journal: {
        A: [
          { name: 'JSAC', fullName: 'IEEE Journal on Selected Areas in Communications', url: 'https://dblp.uni-trier.de/db/journals/jsac/index.html', level: 'A' },
          { name: 'TMC', fullName: 'IEEE Transactions on Mobile Computing', url: 'https://dblp.uni-trier.de/db/journals/tmc/index.html', level: 'A' },
          { name: 'TON', fullName: 'IEEE/ACM Transactions on Networking', url: 'https://dblp.uni-trier.de/db/journals/ton/index.html', level: 'A' }
        ],
        B: [
          { name: 'TOIT', fullName: 'ACM Transactions on Internet Technology', url: 'https://dblp.uni-trier.de/db/journals/toit/index.html', level: 'B' },
          { name: 'TOMM', fullName: 'ACM Transactions on Multimedia Computing, Communications and Applications', url: 'https://dblp.uni-trier.de/db/journals/tomccap/index.html', level: 'B' },
          { name: 'TOSN', fullName: 'ACM Transactions on Sensor Networks', url: 'https://dblp.uni-trier.de/db/journals/tosn/index.html', level: 'B' },
          { name: 'CN', fullName: 'Computer Networks', url: 'https://dblp.uni-trier.de/db/journals/cn/index.html', level: 'B' },
          { name: 'TCOM', fullName: 'IEEE Transactions on Communications', url: 'https://dblp.uni-trier.de/db/journals/tcom/index.html', level: 'B' },
          { name: 'TWC', fullName: 'IEEE Transactions on Wireless Communications', url: 'https://dblp.uni-trier.de/db/journals/twc/index.html', level: 'B' }
        ],
        C: [
          { name: '', fullName: 'Ad Hoc Networks', url: 'https://dblp.uni-trier.de/db/journals/adhoc/index.html', level: 'C' },
          { name: 'CC (Net)', fullName: 'Computer Communications', url: 'https://dblp.uni-trier.de/db/journals/comcom/index.html', level: 'C' },
          { name: 'TNSM', fullName: 'IEEE Transactions on Network and Service Management', url: 'https://dblp.uni-trier.de/db/journals/tnsm/index.html', level: 'C' },
          { name: '', fullName: 'IET Communications', url: 'https://dblp.uni-trier.de/db/journals/iet-com/index.html', level: 'C' },
          { name: 'JNCA', fullName: 'Journal of Network and Computer Applications', url: 'https://dblp.uni-trier.de/db/journals/jnca/index.html', level: 'C' },
          { name: 'MONET', fullName: 'Mobile Networks and Applications', url: 'https://dblp.uni-trier.de/db/journals/monet/index.html', level: 'C' },
          { name: '', fullName: 'Networks', url: 'https://dblp.uni-trier.de/db/journals/networks/index.html', level: 'C' },
          { name: 'PPNA', fullName: 'Peer-to-Peer Networking and Applications', url: 'https://dblp.uni-trier.de/db/journals/ppna/index.html', level: 'C' },
          { name: 'WCMC', fullName: 'Wireless Communications and Mobile Computing', url: 'https://dblp.uni-trier.de/db/journals/wicomm/index.html', level: 'C' },
          { name: '', fullName: 'Wireless Networks', url: 'https://dblp.uni-trier.de/db/journals/winet/index.html', level: 'C' },
          { name: 'IOT', fullName: 'IEEE Internet of Things Journal', url: 'https://dblp.org/db/journals/iot/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'SIGCOMM', fullName: 'ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication', url: 'https://dblp.uni-trier.de/db/conf/sigcomm/index.html', level: 'A' },
          { name: 'MobiCom', fullName: 'ACM International Conference on Mobile Computing and Networking', url: 'https://dblp.uni-trier.de/db/conf/mobicom/index.html', level: 'A' },
          { name: 'INFOCOM', fullName: 'IEEE International Conference on Computer Communications', url: 'https://dblp.uni-trier.de/db/conf/infocom/index.html', level: 'A' },
          { name: 'NSDI', fullName: 'Symposium on Network System Design and Implementation', url: 'https://dblp.uni-trier.de/db/conf/nsdi/index.html', level: 'A' }
        ],
        B: [
          { name: 'SenSys', fullName: 'ACM Conference on Embedded Networked Sensor Systems', url: 'https://dblp.uni-trier.de/db/conf/sensys/index.html', level: 'B' },
          { name: 'CoNEXT', fullName: 'ACM International Conference on Emerging Networking Experiments and Technologies', url: 'https://dblp.uni-trier.de/db/conf/conext/index.html', level: 'B' },
          { name: 'SECON', fullName: 'IEEE International Conference on Sensing, Communication, and Networking', url: 'https://dblp.uni-trier.de/db/conf/secon/index.html', level: 'B' },
          { name: 'IPSN', fullName: 'International Conference on Information Processing in Sensor Networks', url: 'https://dblp.uni-trier.de/db/conf/ipsn/index.html', level: 'B' },
          { name: 'MobiSys', fullName: 'ACM International Conference on Mobile Systems, Applications, and Services', url: 'https://dblp.uni-trier.de/db/conf/mobisys/index.html', level: 'B' },
          { name: 'ICNP', fullName: 'IEEE International Conference on Network Protocols', url: 'https://dblp.uni-trier.de/db/conf/icnp/index.html', level: 'B' },
          { name: 'MobiHoc', fullName: 'International Symposium on Theory, Algorithmic Foundations, and Protocol Design for Mobile Networks and Mobile Computing', url: 'https://dblp.uni-trier.de/db/conf/mobihoc/index.html', level: 'B' },
          { name: 'NOSSDAV', fullName: 'International Workshop on Network and Operating System Support for Digital Audio and Video', url: 'https://dblp.uni-trier.de/db/conf/nossdav/index.html', level: 'B' },
          { name: 'IWQoS', fullName: 'IEEE/ACM International Workshop on Quality of Service', url: 'https://dblp.uni-trier.de/db/conf/iwqos/index.html', level: 'B' },
          { name: 'IMC', fullName: 'ACM Internet Measurement Conference', url: 'https://dblp.uni-trier.de/db/conf/imc/index.html', level: 'B' }
        ],
        C: [
          { name: 'ANCS', fullName: 'ACM/IEEE Symposium on Architectures for Networking and Communication Systems', url: 'https://dblp.uni-trier.de/db/conf/ancs/index.html', level: 'C' },
          { name: 'APNOMS', fullName: 'Asia-Pacific Network Operations and Management Symposium', url: 'https://dblp.uni-trier.de/db/conf/apnoms/index.html', level: 'C' },
          { name: 'FORTE', fullName: 'International Conference on Formal Techniques for Distributed Objects, Components, and Systems', url: 'https://dblp.uni-trier.de/db/conf/forte/index.html', level: 'C' },
          { name: 'LCN', fullName: 'IEEE Conference on Local Computer Networks', url: 'https://dblp.uni-trier.de/db/conf/lcn/index.html', level: 'C' },
          { name: 'GLOBECOM', fullName: 'IEEE Global Communications Conference', url: 'https://dblp.uni-trier.de/db/conf/globecom/index.html', level: 'C' },
          { name: 'ICC', fullName: 'IEEE International Conference on Communications', url: 'https://dblp.uni-trier.de/db/conf/icc/index.html', level: 'C' },
          { name: 'ICCCN', fullName: 'IEEE International Conference on Computer Communications and Networks', url: 'https://dblp.uni-trier.de/db/conf/icccn/index.html', level: 'C' },
          { name: 'MASS', fullName: 'IEEE International Conference on Mobile Adhoc and Sensor Systems', url: 'https://dblp.uni-trier.de/db/conf/mass/index.html', level: 'C' },
          { name: 'P2P', fullName: 'IEEE International Conference on Peer-to-Peer Computing', url: 'https://dblp.uni-trier.de/db/conf/p2p/index.html', level: 'C' },
          { name: 'IPCCC', fullName: 'IEEE International Performance Computing and Communications Conference', url: 'https://dblp.uni-trier.de/db/conf/ipccc/index.html', level: 'C' },
          { name: 'WoWMoM', fullName: 'IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks', url: 'https://dblp.uni-trier.de/db/conf/wowmom/index.html', level: 'C' },
          { name: 'ISCC', fullName: 'IEEE Symposium on Computers and Communications', url: 'https://dblp.uni-trier.de/db/conf/iscc/index.html', level: 'C' },
          { name: 'WCNC', fullName: 'IEEE Wireless Communications and Networking Conference', url: 'https://dblp.uni-trier.de/db/conf/wcnc/index.html', level: 'C' },
          { name: 'Networking', fullName: 'IFIP International Conferences on Networking', url: 'https://dblp.uni-trier.de/db/conf/networking/index.html', level: 'C' },
          { name: 'IM', fullName: 'IFIP/IEEE International Symposium on Integrated Network Management', url: 'https://dblp.uni-trier.de/db/conf/im/index.html', level: 'C' },
          { name: 'MSN', fullName: 'International Conference on Mobility, Sensing and Networking', url: 'https://dblp.uni-trier.de/db/conf/msn/index.html', level: 'C' },
          { name: 'MSWiM', fullName: 'International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems', url: 'https://dblp.uni-trier.de/db/conf/mswim/index.html', level: 'C' },
          { name: 'WASA', fullName: 'International Conference on Wireless Algorithms, Systems, and Applications', url: 'https://dblp.uni-trier.de/db/conf/wasa/index.html', level: 'C' },
          { name: 'HotNets', fullName: 'ACM The Workshop on Hot Topics in Networks', url: 'https://dblp.uni-trier.de/db/conf/hotnets/index.html', level: 'C' },
          { name: 'APNet', fullName: 'Asia-Pacific Workshop on Networking', url: 'https://dblp.org/db/conf/apnet/index.html', level: 'C' }
        ]
      }
    },
    // 网络与信息安全
    security: {
      journal: {
        A: [
          { name: 'TDSC', fullName: 'IEEE Transactions on Dependable and Secure Computing', url: 'https://dblp.uni-trier.de/db/journals/tdsc/index.html', level: 'A' },
          { name: 'TIFS', fullName: 'IEEE Transactions on Information Forensics and Security', url: 'https://dblp.uni-trier.de/db/journals/tifs/index.html', level: 'A' },
          { name: '', fullName: 'Journal of Cryptology', url: 'https://dblp.uni-trier.de/db/journals/joc/index.html', level: 'A' }
        ],
        B: [
          { name: 'TOPS', fullName: 'ACM Transactions on Privacy and Security', url: 'https://dblp.org/db/journals/tissec/index.html', level: 'B' },
          { name: '', fullName: 'Computers & Security', url: 'https://dblp.uni-trier.de/db/journals/compsec/index.html', level: 'B' },
          { name: '', fullName: 'Designs, Codes and Cryptography', url: 'https://dblp.uni-trier.de/db/journals/dcc/index.html', level: 'B' },
          { name: 'JCS', fullName: 'Journal of Computer Security', url: 'https://dblp.uni-trier.de/db/journals/jcs/index.html', level: 'B' }
        ],
        C: [
          { name: 'CLSR', fullName: 'Computer Law & Security Review', url: 'https://dblp.org/db/journals/clsr/index.html', level: 'C' },
          { name: '', fullName: 'EURASIP Journal on Information Security', url: 'https://dblp.uni-trier.de/db/journals/ejisec/index.html', level: 'C' },
          { name: '', fullName: 'IET Information Security', url: 'https://dblp.uni-trier.de/db/journals/iet-ifs/index.html', level: 'C' },
          { name: 'IMCS', fullName: 'Information and Computer Security', url: 'https://dblp.uni-trier.de/db/journals/imcs/index.html', level: 'C' },
          { name: 'IJICS', fullName: 'International Journal of Information and Computer Security', url: 'https://dblp.uni-trier.de/db/journals/ijics/index.html', level: 'C' },
          { name: 'IJISP', fullName: 'International Journal of Information Security and Privacy', url: 'https://dblp.uni-trier.de/db/journals/ijisp/index.html', level: 'C' },
          { name: 'JISA', fullName: 'Journal of Information Security and Applications', url: 'https://dblp.uni-trier.de/db/journals/istr/index.html', level: 'C' },
          { name: 'SCN', fullName: 'Security and Communication Networks', url: 'https://dblp.uni-trier.de/db/journals/scn/index.html', level: 'C' },
          { name: '', fullName: 'Cybersecurity', url: 'https://dblp.uni-trier.de/db/journals/cybersec/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'CCS', fullName: 'ACM Conference on Computer and Communications Security', url: 'https://dblp.uni-trier.de/db/conf/ccs/index.html', level: 'A' },
          { name: 'EUROCRYPT', fullName: 'International Conference on the Theory and Applications of Cryptographic Techniques', url: 'https://dblp.uni-trier.de/db/conf/eurocrypt/index.html', level: 'A' },
          { name: 'S&P', fullName: 'IEEE Symposium on Security and Privacy', url: 'https://dblp.uni-trier.de/db/conf/sp/index.html', level: 'A' },
          { name: 'CRYPTO', fullName: 'International Cryptology Conference', url: 'https://dblp.uni-trier.de/db/conf/crypto/index.html', level: 'A' },
          { name: 'USENIX Security', fullName: 'USENIX Security Symposium', url: 'https://dblp.uni-trier.de/db/conf/uss/index.html', level: 'A' },
          { name: 'NDSS', fullName: 'Network and Distributed System Security Symposium', url: 'https://dblp.uni-trier.de/db/conf/ndss/index.html', level: 'A' }
        ],
        B: [
          { name: 'ACSAC', fullName: 'Annual Computer Security Applications Conference', url: 'https://dblp.uni-trier.de/db/conf/acsac/index.html', level: 'B' },
          { name: 'ASIACRYPT', fullName: 'Annual International Conference on the Theory and Application of Cryptology and Information Security', url: 'https://dblp.uni-trier.de/db/conf/asiacrypt/index.html', level: 'B' },
          { name: 'ESORICS', fullName: 'European Symposium on Research in Computer Security', url: 'https://dblp.uni-trier.de/db/conf/esorics/index.html', level: 'B' },
          { name: 'FSE', fullName: 'Fast Software Encryption', url: 'https://dblp.uni-trier.de/db/conf/fse/index.html', level: 'B' },
          { name: 'CSFW', fullName: 'IEEE Computer Security Foundations Workshop', url: 'https://dblp.uni-trier.de/db/conf/csfw/index.html', level: 'B' },
          { name: 'SRDS', fullName: 'IEEE International Symposium on Reliable Distributed Systems', url: 'https://dblp.uni-trier.de/db/conf/srds/index.html', level: 'B' },
          { name: 'CHES', fullName: 'International Conference on Cryptographic Hardware and Embedded Systems', url: 'https://dblp.uni-trier.de/db/conf/ches/index.html', level: 'B' },
          { name: 'DSN', fullName: 'International Conference on Dependable Systems and Networks', url: 'https://dblp.uni-trier.de/db/conf/dsn/index.html', level: 'B' },
          { name: 'RAID', fullName: 'International Symposium on Recent Advances in Intrusion Detection', url: 'https://dblp.uni-trier.de/db/conf/raid/index.html', level: 'B' },
          { name: 'PKC', fullName: 'International Workshop on Practice and Theory in Public Key Cryptography', url: 'https://dblp.uni-trier.de/db/conf/pkc/index.html', level: 'B' },
          { name: 'TCC', fullName: 'Theory of Cryptography Conference', url: 'https://dblp.uni-trier.de/db/conf/tcc/index.html', level: 'B' }
        ],
        C: [
          { name: 'WiSec', fullName: 'ACM Conference on Security and Privacy in Wireless and Mobile Networks', url: 'https://dblp.uni-trier.de/db/conf/wisec/index.html', level: 'C' },
          { name: 'SACMAT', fullName: 'ACM Symposium on Access Control Models and Technologies', url: 'https://dblp.uni-trier.de/db/conf/sacmat/index.html', level: 'C' },
          { name: 'DRM', fullName: 'ACM Workshop on Digital Rights Management', url: 'https://dblp.uni-trier.de/db/conf/drm/index.html', level: 'C' },
          { name: 'IH&MMSec', fullName: 'ACM Workshop on Information Hiding and Multimedia Security', url: 'https://dblp.uni-trier.de/db/conf/ih/index.html', level: 'C' },
          { name: 'ACNS', fullName: 'International Conference on Applied Cryptography and Network Security', url: 'https://dblp.uni-trier.de/db/conf/acns/index.html', level: 'C' },
          { name: 'AsiaCCS', fullName: 'ACM Asia Conference on Computer and Communications Security', url: 'https://dblp.uni-trier.de/db/conf/ccs/index.html', level: 'C' },
          { name: 'ACISP', fullName: 'Australasia Conference on Information Security and Privacy', url: 'https://dblp.uni-trier.de/db/conf/acisp/index.html', level: 'C' },
          { name: 'CT-RSA', fullName: "The Cryptographer's Track at RSA Conference", url: 'https://dblp.uni-trier.de/db/conf/ctrsa/index.html', level: 'C' },
          { name: 'DIMVA', fullName: 'Conference on Detection of Intrusions and Malware & Vulnerability Assessment', url: 'https://dblp.uni-trier.de/db/conf/dimva/index.html', level: 'C' },
          { name: 'DFRWS', fullName: 'Digital Forensic Research Workshop', url: 'https://dblp.uni-trier.de/db/conf/dfrws/index.html', level: 'C' },
          { name: 'FC', fullName: 'Financial Cryptography and Data Security', url: 'https://dblp.uni-trier.de/db/conf/fc/index.html', level: 'C' },
          { name: 'TrustCom', fullName: 'IEEE International Conference on Trust, Security and Privacy in Computing and Communications', url: 'https://dblp.uni-trier.de/db/conf/trustcom/index.html', level: 'C' },
          { name: 'SEC', fullName: 'IFIP International Information Security Conference', url: 'https://dblp.uni-trier.de/db/conf/sec/index.html', level: 'C' },
          { name: 'IFIP WG 11.9', fullName: 'IFIP Working Group 11.9 International Conference on Digital Forensics', url: 'https://dblp.org/db/conf/ifip11-9/index.html', level: 'C' },
          { name: 'ISC', fullName: 'Information Security Conference', url: 'https://dblp.uni-trier.de/db/conf/isw/index.html', level: 'C' },
          { name: 'ICDF2C', fullName: 'International Conference on Digital Forensics & Cyber Crime', url: 'https://dblp.uni-trier.de/db/conf/icdf2c/index.html', level: 'C' },
          { name: 'ICICS', fullName: 'International Conference on Information and Communications Security', url: 'https://dblp.uni-trier.de/db/conf/icics/index.html', level: 'C' },
          { name: 'SecureComm', fullName: 'International Conference on Security and Privacy in Communication Networks', url: 'https://dblp.uni-trier.de/db/conf/securecomm/index.html', level: 'C' },
          { name: 'NSPW', fullName: 'New Security Paradigms Workshop', url: 'https://dblp.uni-trier.de/db/conf/nspw/index.html', level: 'C' },
          { name: 'PAM', fullName: 'Passive and Active Measurement Conference', url: 'https://dblp.uni-trier.de/db/conf/pam/index.html', level: 'C' },
          { name: 'PETS', fullName: 'Privacy Enhancing Technologies Symposium', url: 'https://dblp.uni-trier.de/db/conf/pet/index.html', level: 'C' },
          { name: 'SAC', fullName: 'Selected Areas in Cryptography', url: 'https://dblp.uni-trier.de/db/conf/sacrypt/index.html', level: 'C' },
          { name: 'SOUPS', fullName: 'Symposium On Usable Privacy and Security', url: 'https://dblp.uni-trier.de/db/conf/soups/index.html', level: 'C' },
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
          { name: 'TOPLAS', fullName: 'ACM Transactions on Programming Languages and Systems', url: 'https://dblp.uni-trier.de/db/journals/toplas/index.html', level: 'A' },
          { name: 'TOSEM', fullName: 'ACM Transactions on Software Engineering and Methodology', url: 'https://dblp.uni-trier.de/db/journals/tosem/index.html', level: 'A' },
          { name: 'TSE', fullName: 'IEEE Transactions on Software Engineering', url: 'https://dblp.uni-trier.de/db/journals/tse/index.html', level: 'A' },
          { name: 'TSC', fullName: 'IEEE Transactions on Services Computing', url: 'https://dblp.uni-trier.de/db/journals/tsc/index.html', level: 'A' }
        ],
        B: [
          { name: 'ASE (J)', fullName: 'Automated Software Engineering', url: 'https://dblp.uni-trier.de/db/journals/ase/index.html', level: 'B' },
          { name: 'ESE', fullName: 'Empirical Software Engineering', url: 'https://dblp.uni-trier.de/db/journals/ese/index.html', level: 'B' },
          { name: 'IETS', fullName: 'IET Software', url: 'https://dblp.uni-trier.de/db/journals/iet-sen/index.html', level: 'B' },
          { name: 'IST', fullName: 'Information and Software Technology', url: 'https://dblp.uni-trier.de/db/journals/infsof/index.html', level: 'B' },
          { name: 'JFP', fullName: 'Journal of Functional Programming', url: 'https://dblp.uni-trier.de/db/journals/jfp/index.html', level: 'B' },
          { name: '', fullName: 'Journal of Software: Evolution and Process', url: 'https://dblp.uni-trier.de/db/journals/smr/index.html', level: 'B' },
          { name: 'JSS', fullName: 'Journal of Systems and Software', url: 'https://dblp.uni-trier.de/db/journals/jss/index.html', level: 'B' },
          { name: 'RE (J)', fullName: 'Requirements Engineering', url: 'https://dblp.uni-trier.de/db/journals/re/index.html', level: 'B' },
          { name: 'SCP', fullName: 'Science of Computer Programming', url: 'https://dblp.uni-trier.de/db/journals/scp/index.html', level: 'B' },
          { name: 'SoSyM', fullName: 'Software and Systems Modeling', url: 'https://dblp.uni-trier.de/db/journals/sosym/index.html', level: 'B' },
          { name: 'STVR', fullName: 'Software Testing, Verification and Reliability', url: 'https://dblp.uni-trier.de/db/journals/stvr/index.html', level: 'B' },
          { name: 'SPE', fullName: 'Software: Practice and Experience', url: 'https://dblp.uni-trier.de/db/journals/spe/index.html', level: 'B' }
        ],
        C: [
          { name: 'CL', fullName: 'Computer Languages, Systems and Structures', url: 'https://dblp.uni-trier.de/db/journals/cl/index.html', level: 'C' },
          { name: 'IJSEKE', fullName: 'International Journal of Software Engineering and Knowledge Engineering', url: 'https://dblp.uni-trier.de/db/journals/ijseke/index.html', level: 'C' },
          { name: 'STTT', fullName: 'International Journal of Software Tools for Technology Transfer', url: 'https://dblp.uni-trier.de/db/journals/sttt/index.html', level: 'C' },
          { name: 'JLAMP', fullName: 'Journal of Logical and Algebraic Methods in Programming', url: 'https://dblp.uni-trier.de/db/journals/jlap/index.html', level: 'C' },
          { name: 'JWE', fullName: 'Journal of Web Engineering', url: 'https://dblp.uni-trier.de/db/journals/jwe/index.html', level: 'C' },
          { name: 'SOCA', fullName: 'Service Oriented Computing and Applications', url: 'https://dblp.uni-trier.de/db/journals/soca/index.html', level: 'C' },
          { name: 'SQJ', fullName: 'Software Quality Journal', url: 'https://dblp.uni-trier.de/db/journals/sqj/index.html', level: 'C' },
          { name: 'TPLP', fullName: 'Theory and Practice of Logic Programming', url: 'https://dblp.uni-trier.de/db/journals/tplp/index.html', level: 'C' },
          { name: 'PACM PL', fullName: 'Proceedings of the ACM on Programming Languages', url: 'https://dblp.org/db/journals/pacmpl/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'PLDI', fullName: 'ACM SIGPLAN Conference on Programming Language Design and Implementation', url: 'https://dblp.uni-trier.de/db/conf/pldi/index.html', level: 'A' },
          { name: 'POPL', fullName: 'ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages', url: 'https://dblp.uni-trier.de/db/conf/popl/index.html', level: 'A' },
          { name: 'FSE/ESEC', fullName: 'ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering', url: 'https://dblp.uni-trier.de/db/conf/sigsoft/index.html', level: 'A' },
          { name: 'SOSP', fullName: 'ACM Symposium on Operating Systems Principles', url: 'https://dblp.uni-trier.de/db/conf/sosp/index.html', level: 'A' },
          { name: 'OOPSLA', fullName: 'Conference on Object-Oriented Programming Systems, Languages, and Applications', url: 'https://dblp.uni-trier.de/db/conf/oopsla/index.html', level: 'A' },
          { name: 'ASE', fullName: 'International Conference on Automated Software Engineering', url: 'https://dblp.uni-trier.de/db/conf/kbse/index.html', level: 'A' },
          { name: 'ICSE', fullName: 'International Conference on Software Engineering', url: 'https://dblp.uni-trier.de/db/conf/icse/index.html', level: 'A' },
          { name: 'ISSTA', fullName: 'International Symposium on Software Testing and Analysis', url: 'https://dblp.uni-trier.de/db/conf/issta/index.html', level: 'A' },
          { name: 'OSDI', fullName: 'USENIX Symposium on Operating Systems Design and Implementation', url: 'https://dblp.uni-trier.de/db/conf/osdi/index.html', level: 'A' },
          { name: 'FM', fullName: 'International Symposium on Formal Methods', url: 'https://dblp.uni-trier.de/db/conf/fm/index.html', level: 'A' }
        ],
        B: [
          { name: 'ECOOP', fullName: 'European Conference on Object-Oriented Programming', url: 'https://dblp.uni-trier.de/db/conf/ecoop/index.html', level: 'B' },
          { name: 'ETAPS', fullName: 'European Joint Conferences on Theory and Practice of Software', url: 'https://dblp.uni-trier.de/db/conf/etaps/index.html', level: 'B' },
          { name: 'ICPC', fullName: 'IEEE International Conference on Program Comprehension', url: 'https://dblp.uni-trier.de/db/conf/iwpc/index.html', level: 'B' },
          { name: 'RE', fullName: 'IEEE International Requirements Engineering Conference', url: 'https://dblp.uni-trier.de/db/conf/re/index.html', level: 'B' },
          { name: 'CAiSE', fullName: 'International Conference on Advanced Information Systems Engineering', url: 'https://dblp.uni-trier.de/db/conf/caise/index.html', level: 'B' },
          { name: 'ICFP', fullName: 'ACM SIGPLAN International Conference on Function Programming', url: 'https://dblp.uni-trier.de/db/conf/icfp/index.html', level: 'B' },
          { name: 'LCTES', fullName: 'ACM SIGPLAN/SIGBED International Conference on Languages, Compilers and Tools for Embedded Systems', url: 'https://dblp.uni-trier.de/db/conf/lctrts/index.html', level: 'B' },
          { name: 'MoDELS', fullName: 'ACM/IEEE International Conference on Model Driven Engineering Languages and Systems', url: 'https://dblp.uni-trier.de/db/conf/models/index.html', level: 'B' },
          { name: 'CP', fullName: 'International Conference on Principles and Practice of Constraint Programming', url: 'https://dblp.uni-trier.de/db/conf/cp/index.html', level: 'B' },
          { name: 'ICSOC', fullName: 'International Conference on Service Oriented Computing', url: 'https://dblp.uni-trier.de/db/conf/icsoc/index.html', level: 'B' },
          { name: 'SANER', fullName: 'IEEE International Conference on Software Analysis, Evolution, and Reengineering', url: 'https://dblp.uni-trier.de/db/conf/wcre/index.html', level: 'B' },
          { name: 'ICSME', fullName: 'International Conference on Software Maintenance and Evolution', url: 'https://dblp.uni-trier.de/db/conf/icsm/index.html', level: 'B' },
          { name: 'VMCAI', fullName: 'International Conference on Verification, Model Checking and Abstract Interpretation', url: 'https://dblp.uni-trier.de/db/conf/vmcai/index.html', level: 'B' },
          { name: 'ICWS', fullName: 'IEEE International Conference on Web Services', url: 'https://dblp.uni-trier.de/db/conf/icws/index.html', level: 'B' },
          { name: 'Middleware', fullName: 'International Middleware Conference', url: 'https://dblp.uni-trier.de/db/conf/middleware/index.html', level: 'B' },
          { name: 'SAS', fullName: 'International Static Analysis Symposium', url: 'https://dblp.uni-trier.de/db/conf/sas/index.html', level: 'B' },
          { name: 'ESEM', fullName: 'International Symposium on Empirical Software Engineering and Measurement', url: 'https://dblp.uni-trier.de/db/conf/esem/index.html', level: 'B' },
          { name: 'ISSRE', fullName: 'IEEE International Symposium on Software Reliability Engineering', url: 'https://dblp.uni-trier.de/db/conf/issre/index.html', level: 'B' },
          { name: 'HotOS', fullName: 'USENIX Workshop on Hot Topics in Operating Systems', url: 'https://dblp.uni-trier.de/db/conf/hotos/index.html', level: 'B' }
        ],
        C: [
          { name: 'PEPM', fullName: 'ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation', url: 'https://dblp.uni-trier.de/db/conf/pepm/index.html', level: 'C' },
          { name: 'PASTE', fullName: 'ACM SIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering', url: 'https://dblp.uni-trier.de/db/conf/paste/index.html', level: 'C' },
          { name: 'APLAS', fullName: 'Asian Symposium on Programming Languages and Systems', url: 'https://dblp.uni-trier.de/db/conf/aplas/index.html', level: 'C' },
          { name: 'APSEC', fullName: 'Asia-Pacific Software Engineering Conference', url: 'https://dblp.uni-trier.de/db/conf/apsec/index.html', level: 'C' },
          { name: 'EASE', fullName: 'International Conference on Evaluation and Assessment in Software Engineering', url: 'https://dblp.uni-trier.de/db/conf/ease/index.html', level: 'C' },
          { name: 'ICECCS', fullName: 'International Conference on Engineering of Complex Computer Systems', url: 'https://dblp.uni-trier.de/db/conf/iceccs/index.html', level: 'C' },
          { name: 'ICST', fullName: 'IEEE International Conference on Software Testing, Verification and Validation', url: 'https://dblp.uni-trier.de/db/conf/icst/index.html', level: 'C' },
          { name: 'ISPASS', fullName: 'IEEE International Symposium on Performance Analysis of Systems and Software', url: 'https://dblp.uni-trier.de/db/conf/ispass/index.html', level: 'C' },
          { name: 'SCAM', fullName: 'IEEE International Working Conference on Source Code Analysis and Manipulation', url: 'https://dblp.uni-trier.de/db/conf/scam/index.html', level: 'C' },
          { name: 'COMPSAC', fullName: 'International Computer Software and Applications Conference', url: 'https://dblp.uni-trier.de/db/conf/compsac/index.html', level: 'C' },
          { name: 'ICFEM', fullName: 'International Conference on Formal Engineering Methods', url: 'https://dblp.uni-trier.de/db/conf/icfem/index.html', level: 'C' },
          { name: 'TOOLS', fullName: 'International Conference on Objects, Models, Components, Patterns（2019年停办）', url: 'https://dblp.uni-trier.de/db/conf/tools/index.html', level: 'C' },
          { name: 'SCC', fullName: 'IEEE International Conference on Services Computing', url: 'https://dblp.uni-trier.de/db/conf/IEEEscc/index.html', level: 'C' },
          { name: 'ICSSP', fullName: 'International Conference on Software and System Process', url: 'https://dblp.uni-trier.de/db/conf/ispw/index.html', level: 'C' },
          { name: 'SEKE', fullName: 'International Conference on Software Engineering and Knowledge Engineering', url: 'https://dblp.uni-trier.de/db/conf/seke/index.html', level: 'C' },
          { name: 'QRS', fullName: 'International Conference on Software Quality, Reliability and Security', url: 'https://dblp.uni-trier.de/db/conf/qrs/index.html', level: 'C' },
          { name: 'ICSR', fullName: 'International Conference on Software Reuse', url: 'https://dblp.uni-trier.de/db/conf/icsr/index.html', level: 'C' },
          { name: 'ICWE', fullName: 'International Conference on Web Engineering', url: 'https://dblp.uni-trier.de/db/conf/icwe/index.html', level: 'C' },
          { name: 'SPIN', fullName: 'International Symposium on Model Checking of Software', url: 'https://dblp.uni-trier.de/db/conf/spin/index.html', level: 'C' },
          { name: 'ATVA', fullName: 'International Symposium on Automated Technology for Verification and Analysis', url: 'https://dblp.uni-trier.de/db/conf/atva/index.html', level: 'C' },
          { name: 'LOPSTR', fullName: 'International Symposium on Logic-based Program Synthesis and Transformation', url: 'https://dblp.uni-trier.de/db/conf/lopstr/index.html', level: 'C' },
          { name: 'TASE', fullName: 'Theoretical Aspects of Software Engineering Conference', url: 'https://dblp.uni-trier.de/db/conf/tase/index.html', level: 'C' },
          { name: 'MSR', fullName: 'Mining Software Repositories', url: 'https://dblp.uni-trier.de/db/conf/msr/index.html', level: 'C' },
          { name: 'REFSQ', fullName: 'Requirements Engineering: Foundation for Software Quality', url: 'https://dblp.uni-trier.de/db/conf/refsq/index.html', level: 'C' },
          { name: 'WICSA', fullName: 'Working IEEE/IFIP Conference on Software Architecture', url: 'https://dblp.uni-trier.de/db/conf/wicsa/index.html', level: 'C' },
          { name: 'Internetware', fullName: 'Asia-Pacific Symposium on Internetware', url: 'https://dblp.org/db/conf/internetware/index.html', level: 'C' },
          { name: 'RV', fullName: 'International Conference on Runtime Verification', url: 'https://dblp.org/db/conf/rv/index.html', level: 'C' }
        ]
      }
    },
    // 数据库/数据挖掘/内容检索
    database: {
      journal: {
        A: [
          { name: 'TODS', fullName: 'ACM Transactions on Database Systems', url: 'https://dblp.uni-trier.de/db/journals/tods/index.html', level: 'A' },
          { name: 'TOIS', fullName: 'ACM Transactions on Information Systems', url: 'https://dblp.uni-trier.de/db/journals/tois/index.html', level: 'A' },
          { name: 'TKDE', fullName: 'IEEE Transactions on Knowledge and Data Engineering', url: 'https://dblp.uni-trier.de/db/journals/tkde/index.html', level: 'A' },
          { name: 'VLDBJ', fullName: 'The VLDB Journal', url: 'https://dblp.uni-trier.de/db/journals/vldb/index.html', level: 'A' }
        ],
        B: [
          { name: 'TKDD', fullName: 'ACM Transactions on Knowledge Discovery from Data', url: 'https://dblp.uni-trier.de/db/journals/tkdd/index.html', level: 'B' },
          { name: 'TWEB', fullName: 'ACM Transactions on the Web', url: 'https://dblp.uni-trier.de/db/journals/tweb/index.html', level: 'B' },
          { name: 'AEI', fullName: 'Advanced Engineering Informatics', url: 'https://dblp.uni-trier.de/db/journals/aei/index.html', level: 'B' },
          { name: 'DKE', fullName: 'Data & Knowledge Engineering', url: 'https://dblp.uni-trier.de/db/journals/dke/index.html', level: 'B' },
          { name: 'DMKD', fullName: 'Data Mining and Knowledge Discovery', url: 'https://dblp.uni-trier.de/db/journals/datamine/index.html', level: 'B' },
          { name: 'EJIS', fullName: 'European Journal of Information Systems', url: 'https://dblp.uni-trier.de/db/journals/ejis/index.html', level: 'B' },
          { name: '', fullName: 'GeoInformatica', url: 'https://dblp.uni-trier.de/db/journals/geoinformatica/index.html', level: 'B' },
          { name: 'IPM', fullName: 'Information Processing and Management', url: 'https://dblp.uni-trier.de/db/journals/ipm/index.html', level: 'B' },
          { name: '', fullName: 'Information Sciences', url: 'https://dblp.uni-trier.de/db/journals/isci/index.html', level: 'B' },
          { name: 'IS', fullName: 'Information Systems', url: 'https://dblp.uni-trier.de/db/journals/is/index.html', level: 'B' },
          { name: 'JASIST', fullName: 'Journal of the Association for Information Science and Technology', url: 'https://dblp.uni-trier.de/db/journals/jasis/index.html', level: 'B' },
          { name: 'JWS', fullName: 'Journal of Web Semantics', url: 'https://dblp.uni-trier.de/db/journals/ws/index.html', level: 'B' },
          { name: 'KAIS', fullName: 'Knowledge and Information Systems', url: 'https://dblp.uni-trier.de/db/journals/kais/index.html', level: 'B' }
        ],
        C: [
          { name: 'DPD', fullName: 'Distributed and Parallel Databases', url: 'https://dblp.uni-trier.de/db/journals/dpd/index.html', level: 'C' },
          { name: 'I&M', fullName: 'Information & Management', url: 'https://dblp.uni-trier.de/db/journals/iam/index.html', level: 'C' },
          { name: 'IPL', fullName: 'Information Processing Letters', url: 'https://dblp.uni-trier.de/db/journals/ipl/index.html', level: 'C' },
          { name: 'IR', fullName: 'Information Retrieval Journal', url: 'https://dblp.uni-trier.de/db/journals/ir/index.html', level: 'C' },
          { name: 'IJCIS', fullName: 'International Journal of Cooperative Information Systems', url: 'https://dblp.uni-trier.de/db/journals/ijcis/index.html', level: 'C' },
          { name: 'IJGIS', fullName: 'International Journal of Geographical Information Science', url: 'https://dblp.uni-trier.de/db/journals/gis/index.html', level: 'C' },
          { name: 'IJIS', fullName: 'International Journal of Intelligent Systems', url: 'https://dblp.uni-trier.de/db/journals/ijis/index.html', level: 'C' },
          { name: 'IJKM', fullName: 'International Journal of Knowledge Management', url: 'https://dblp.uni-trier.de/db/journals/ijkm/index.html', level: 'C' },
          { name: 'IJSWIS', fullName: 'International Journal on Semantic Web and Information Systems', url: 'https://dblp.uni-trier.de/db/journals/ijswis/index.html', level: 'C' },
          { name: 'JCIS', fullName: 'Journal of Computer Information Systems', url: 'https://dblp.uni-trier.de/db/journals/jcis/index.html', level: 'C' },
          { name: 'JDM', fullName: 'Journal of Database Management', url: 'https://dblp.uni-trier.de/db/journals/jdm/index.html', level: 'C' },
          { name: 'JGITM', fullName: 'Journal of Global Information Technology Management', url: 'https://dblp.org/db/journals/jgim/index.html', level: 'C' },
          { name: 'JIIS', fullName: 'Journal of Intelligent Information Systems', url: 'https://dblp.uni-trier.de/db/journals/jiis/index.html', level: 'C' },
          { name: 'JSIS', fullName: 'The Journal of Strategic Information Systems', url: 'https://dblp.uni-trier.de/db/journals/jsis/index.html', level: 'C' },
          { name: 'DSE', fullName: 'Data Science and Engineering', url: 'https://dblp.org/db/journals/dase/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'SIGMOD', fullName: 'ACM SIGMOD Conference', url: 'https://dblp.uni-trier.de/db/conf/sigmod/index.html', level: 'A' },
          { name: 'SIGKDD', fullName: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining', url: 'https://dblp.uni-trier.de/db/conf/kdd/index.html', level: 'A' },
          { name: 'ICDE', fullName: 'IEEE International Conference on Data Engineering', url: 'https://dblp.uni-trier.de/db/conf/icde/index.html', level: 'A' },
          { name: 'SIGIR', fullName: 'International ACM SIGIR Conference on Research and Development in Information Retrieval', url: 'https://dblp.uni-trier.de/db/conf/sigir/index.html', level: 'A' },
          { name: 'VLDB', fullName: 'International Conference on Very Large Data Bases', url: 'https://dblp.uni-trier.de/db/conf/vldb/index.html', level: 'A' }
        ],
        B: [
          { name: 'CIKM', fullName: 'ACM International Conference on Information and Knowledge Management', url: 'https://dblp.uni-trier.de/db/conf/cikm/index.html', level: 'B' },
          { name: 'WSDM', fullName: 'ACM International Conference on Web Search and Data Mining', url: 'https://dblp.uni-trier.de/db/conf/wsdm/index.html', level: 'B' },
          { name: 'PODS', fullName: 'ACM SIGMOD-SIGACT-SIGAI Symposium on Principles of Database Systems', url: 'https://dblp.uni-trier.de/db/conf/pods/index.html', level: 'B' },
          { name: 'DASFAA', fullName: 'International Conference on Database Systems for Advanced Applications', url: 'https://dblp.uni-trier.de/db/conf/dasfaa/index.html', level: 'B' },
          { name: 'ECML-PKDD', fullName: 'European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases', url: 'https://dblp.uni-trier.de/db/conf/ecml/index.html https://dblp.uni-trier.de/db/conf/pkdd/index.html', level: 'B' },
          { name: 'ISWC', fullName: 'IEEE International Semantic Web Conference', url: 'https://dblp.uni-trier.de/db/conf/semweb/index.html', level: 'B' },
          { name: 'ICDM', fullName: 'IEEE International Conference on Data Mining', url: 'https://dblp.uni-trier.de/db/conf/icdm/index.html', level: 'B' },
          { name: 'ICDT', fullName: 'International Conference on Database Theory', url: 'https://dblp.uni-trier.de/db/conf/icdt/index.html', level: 'B' },
          { name: 'EDBT', fullName: 'International Conference on Extending Database Technology', url: 'https://dblp.uni-trier.de/db/conf/edbt/index.html', level: 'B' },
          { name: 'CIDR', fullName: 'Conference on Innovative Data Systems Research', url: 'https://dblp.uni-trier.de/db/conf/cidr/index.html', level: 'B' },
          { name: 'SDM', fullName: 'SIAM International Conference on Data Mining', url: 'https://dblp.uni-trier.de/db/conf/sdm/index.html', level: 'B' },
          { name: 'RecSys', fullName: 'ACM Conference on Recommender Systems', url: 'https://dblp.org/db/conf/recsys/index.html', level: 'B' }
        ],
        C: [
          { name: 'APWeb', fullName: 'Asia Pacific Web Conference', url: 'https://dblp.uni-trier.de/db/conf/apweb/index.html', level: 'C' },
          { name: 'DEXA', fullName: 'International Conference on Database and Expert System Applications', url: 'https://dblp.uni-trier.de/db/conf/dexa/index.html', level: 'C' },
          { name: 'ECIR', fullName: 'European Conference on Information Retrieval', url: 'https://dblp.uni-trier.de/db/conf/ecir/index.html', level: 'C' },
          { name: 'ESWC', fullName: 'Extended Semantic Web Conference', url: 'https://dblp.uni-trier.de/db/conf/esws/index.html', level: 'C' },
          { name: 'WebDB', fullName: 'International Workshop on Web and Databases', url: 'https://dblp.uni-trier.de/db/conf/webdb/index.html', level: 'C' },
          { name: 'ER', fullName: 'International Conference on Conceptual Modeling', url: 'https://dblp.uni-trier.de/db/conf/er/index.html', level: 'C' },
          { name: 'MDM', fullName: 'International Conference on Mobile Data Management', url: 'https://dblp.uni-trier.de/db/conf/mdm/index.html', level: 'C' },
          { name: 'SSDBM', fullName: 'International Conference on Scientific and Statistical Database Management', url: 'https://dblp.uni-trier.de/db/conf/ssdbm/index.html', level: 'C' },
          { name: 'WAIM', fullName: 'International Conference on Web Age Information Management', url: 'https://dblp.uni-trier.de/db/conf/waim/index.html', level: 'C' },
          { name: 'SSTD', fullName: 'International Symposium on Spatial and Temporal Databases', url: 'https://dblp.uni-trier.de/db/conf/ssd/index.html', level: 'C' },
          { name: 'PAKDD', fullName: 'Pacific-Asia Conference on Knowledge Discovery and Data Mining', url: 'https://dblp.uni-trier.de/db/conf/pakdd/index.html', level: 'C' },
          { name: 'WISE', fullName: 'Web Information Systems Engineering', url: 'https://dblp.uni-trier.de/db/conf/wise/index.html', level: 'C' },
          { name: 'ADMA', fullName: 'International Conference on Advanced Data Mining and Applications', url: 'https://dblp.org/db/conf/adma/index.html', level: 'C' }
        ]
      }
    },
    // 计算机科学理论
    theory: {
      journal: {
        A: [
          { name: 'TIT', fullName: 'IEEE Transactions on Information Theory', url: 'https://dblp.uni-trier.de/db/journals/tit/index.html', level: 'A' },
          { name: 'IANDC', fullName: 'Information and Computation', url: 'https://dblp.uni-trier.de/db/journals/iandc/index.html', level: 'A' },
          { name: 'SICOMP', fullName: 'SIAM Journal on Computing', url: 'https://dblp.uni-trier.de/db/journals/siamcomp/index.html', level: 'A' }
        ],
        B: [
          { name: 'TALG', fullName: 'ACM Transactions on Algorithms', url: 'https://dblp.uni-trier.de/db/journals/talg/index.html', level: 'B' },
          { name: 'TOCL', fullName: 'ACM Transactions on Computational Logic', url: 'https://dblp.uni-trier.de/db/journals/tocl/index.html', level: 'B' },
          { name: 'TOMS', fullName: 'ACM Transactions on Mathematical Software', url: 'https://dblp.uni-trier.de/db/journals/toms/index.html', level: 'B' },
          { name: 'Algorithmica', fullName: 'Algorithmica', url: 'https://dblp.uni-trier.de/db/journals/algorithmica/index.html', level: 'B' },
          { name: 'CC (Theory)', fullName: 'Computational Complexity', url: 'https://dblp.uni-trier.de/db/journals/cc/index.html', level: 'B' },
          { name: 'FAC', fullName: 'Formal Aspects of Computing', url: 'https://dblp.uni-trier.de/db/journals/fac/index.html', level: 'B' },
          { name: 'FMSD', fullName: 'Formal Methods in System Design', url: 'https://dblp.uni-trier.de/db/journals/fmsd/index.html', level: 'B' },
          { name: 'INFORMS', fullName: 'INFORMS Journal on Computing', url: 'https://dblp.uni-trier.de/db/journals/informs/index.html', level: 'B' },
          { name: 'JCSS', fullName: 'Journal of Computer and System Sciences', url: 'https://dblp.uni-trier.de/db/journals/jcss/index.html', level: 'B' },
          { name: 'JGO', fullName: 'Journal of Global Optimization', url: 'https://dblp.uni-trier.de/db/journals/jgo/index.html', level: 'B' },
          { name: 'JSC', fullName: 'Journal of Symbolic Computation', url: 'https://dblp.uni-trier.de/db/journals/jsc/index.html', level: 'B' },
          { name: 'MSCS', fullName: 'Mathematical Structures in Computer Science', url: 'https://dblp.uni-trier.de/db/journals/mscs/index.html', level: 'B' },
          { name: 'TCS', fullName: 'Theoretical Computer Science', url: 'https://dblp.uni-trier.de/db/journals/tcs/index.html', level: 'B' }
        ],
        C: [
          { name: 'ACTA', fullName: 'Acta Informatica', url: 'https://dblp.uni-trier.de/db/journals/acta/index.html', level: 'C' },
          { name: 'APAL', fullName: 'Annals of Pure and Applied Logic', url: 'https://dblp.uni-trier.de/db/journals/apal/index.html', level: 'C' },
          { name: 'DAM', fullName: 'Discrete Applied Mathematics', url: 'https://dblp.uni-trier.de/db/journals/dam/index.html', level: 'C' },
          { name: 'FUIN', fullName: 'Fundamenta Informaticae', url: 'https://dblp.uni-trier.de/db/journals/fuin/index.html', level: 'C' },
          { name: 'LISP', fullName: 'Higher-Order and Symbolic Computation（2013年已停刊）', url: 'https://dblp.uni-trier.de/db/journals/lisp/index.html', level: 'C' },
          { name: 'IPL', fullName: 'Information Processing Letters', url: 'https://dblp.uni-trier.de/db/journals/ipl/index.html', level: 'C' },
          { name: 'JCOMPLEXITY', fullName: 'Journal of Complexity', url: 'https://dblp.uni-trier.de/db/journals/jc/index.html', level: 'C' },
          { name: 'LOGCOM', fullName: 'Journal of Logic and Computation', url: 'https://dblp.uni-trier.de/db/journals/logcom/index.html', level: 'C' },
          { name: 'JSL', fullName: 'The Journal of Symbolic Logic', url: 'https://dblp.uni-trier.de/db/journals/jsyml/index.html', level: 'C' },
          { name: 'LMCS', fullName: 'Logical Methods in Computer Science', url: 'https://dblp.uni-trier.de/db/journals/lmcs/index.html', level: 'C' },
          { name: 'SIDMA', fullName: 'SIAM Journal on Discrete Mathematics', url: 'https://dblp.uni-trier.de/db/journals/siamdm/index.html', level: 'C' },
          { name: '', fullName: 'Theory of Computing Systems', url: 'https://dblp.uni-trier.de/db/journals/mst/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'STOC', fullName: 'ACM Symposium on the Theory of Computing', url: 'https://dblp.uni-trier.de/db/conf/stoc/index.html', level: 'A' },
          { name: 'SODA', fullName: 'ACM-SIAM Symposium on Discrete Algorithms', url: 'https://dblp.uni-trier.de/db/conf/soda/index.html', level: 'A' },
          { name: 'CAV', fullName: 'International Conference on Computer Aided Verification', url: 'https://dblp.uni-trier.de/db/conf/cav/index.html', level: 'A' },
          { name: 'FOCS', fullName: 'IEEE Annual Symposium on Foundations of Computer Science', url: 'https://dblp.uni-trier.de/db/conf/focs/index.html', level: 'A' },
          { name: 'LICS', fullName: 'ACM/IEEE Symposium on Logic in Computer Science', url: 'https://dblp.uni-trier.de/db/conf/lics/index.html', level: 'A' }
        ],
        B: [
          { name: 'SoCG', fullName: 'International Symposium on Computational Geometry', url: 'https://dblp.uni-trier.de/db/conf/compgeom/index.html', level: 'B' },
          { name: 'ESA', fullName: 'European Symposium on Algorithms', url: 'https://dblp.uni-trier.de/db/conf/esa/index.html', level: 'B' },
          { name: 'CCC', fullName: 'Conference on Computational Complexity', url: 'https://dblp.uni-trier.de/db/conf/coco/index.html', level: 'B' },
          { name: 'ICALP', fullName: 'International Colloquium on Automata, Languages and Programming', url: 'https://dblp.uni-trier.de/db/conf/icalp/index.html', level: 'B' },
          { name: '', fullName: 'International Conference on Automated Deduction/International Joint Conference on Automated Reasoning', url: 'https://dblp.uni-trier.de/db/conf/cade/index.html', level: 'B' },
          { name: 'CONCUR', fullName: 'International Conference on Concurrency Theory', url: 'https://dblp.uni-trier.de/db/conf/concur/index.html', level: 'B' },
          { name: 'HSCC', fullName: 'International Conference on Hybrid Systems: Computation and Control', url: 'https://dblp.uni-trier.de/db/conf/hybrid/index.html', level: 'B' },
          { name: 'SAT', fullName: 'International Conference on Theory and Applications of Satisfiability Testing', url: 'https://dblp.uni-trier.de/db/conf/sat/index.html', level: 'B' },
          { name: 'COCOON', fullName: 'International Computing and Combinatorics Conference', url: 'https://dblp.org/db/conf/cocoon/index.html', level: 'B' }
        ],
        C: [
          { name: 'CSL', fullName: 'Computer Science Logic', url: 'https://dblp.uni-trier.de/db/conf/csl/index.html', level: 'C' },
          { name: 'FMCAD', fullName: 'Formal Methods in Computer-Aided Design', url: 'https://dblp.uni-trier.de/db/conf/fmcad/index.html', level: 'C' },
          { name: 'FSTTCS', fullName: 'Foundations of Software Technology and Theoretical Computer Science', url: 'https://dblp.uni-trier.de/db/conf/fsttcs/index.html', level: 'C' },
          { name: 'DSAA', fullName: 'IEEE International Conference on Data Science and Advanced Analytics', url: 'https://dblp.uni-trier.de/db/conf/dsaa/index.html', level: 'C' },
          { name: 'ICTAC', fullName: 'International Colloquium on Theoretical Aspects of Computing', url: 'https://dblp.uni-trier.de/db/conf/ictac/index.html', level: 'C' },
          { name: 'IPCO', fullName: 'International Conference on Integer Programming and Combinatorial Optimization', url: 'https://dblp.uni-trier.de/db/conf/ipco/index.html', level: 'C' },
          { name: 'RTA', fullName: 'International Conference on Rewriting Techniques and Applications', url: 'https://dblp.uni-trier.de/db/conf/rta/index.html', level: 'C' },
          { name: 'ISAAC', fullName: 'International Symposium on Algorithms and Computation', url: 'https://dblp.uni-trier.de/db/conf/isaac/index.html', level: 'C' },
          { name: 'MFCS', fullName: 'International Conference on Mathematical Foundations of Computer Science', url: 'https://dblp.uni-trier.de/db/conf/mfcs/index.html', level: 'C' },
          { name: 'STACS', fullName: 'Symposium on Theoretical Aspects of Computer Science', url: 'https://dblp.uni-trier.de/db/conf/stacs/index.html', level: 'C' },
          { name: 'SETTA', fullName: 'International Symposium on Dependable Software Engineering: Theories, Tools, and Applications', url: 'https://dblp.org/db/conf/setta/index.html', level: 'C' }
        ]
      }
    },
    // 计算机图形学与多媒体
    graphics: {
      journal: {
        A: [
          { name: 'TOG', fullName: 'ACM Transactions on Graphics', url: 'https://dblp.uni-trier.de/db/journals/tog/index.html', level: 'A' },
          { name: 'TIP', fullName: 'IEEE Transactions on Image Processing', url: 'https://dblp.uni-trier.de/db/journals/tip/index.html', level: 'A' },
          { name: 'TVCG', fullName: 'IEEE Transactions on Visualization and Computer Graphics', url: 'https://dblp.uni-trier.de/db/journals/tvcg/index.html', level: 'A' }
        ],
        B: [
          { name: 'TOMM', fullName: 'ACM Transactions on Multimedia Computing, Communications and Applications', url: 'https://dblp.uni-trier.de/db/journals/tomccap/index.html', level: 'B' },
          { name: 'CAGD', fullName: 'Computer Aided Geometric Design', url: 'https://dblp.uni-trier.de/db/journals/cagd/index.html', level: 'B' },
          { name: 'CGF', fullName: 'Computer Graphics Forum', url: 'https://dblp.uni-trier.de/db/journals/cgf/index.html', level: 'B' },
          { name: 'CAD', fullName: 'Computer-Aided Design', url: 'https://dblp.uni-trier.de/db/journals/cad/index.html', level: 'B' },
          { name: 'GM', fullName: 'Graphical Models', url: 'https://dblp.uni-trier.de/db/journals/cvgip/index.html', level: 'B' },
          { name: 'TCSVT', fullName: 'IEEE Transactions on Circuits and Systems for Video Technology', url: 'https://dblp.uni-trier.de/db/journals/tcsv/index.html', level: 'B' },
          { name: 'TMM', fullName: 'IEEE Transactions on Multimedia', url: 'https://dblp.uni-trier.de/db/journals/tmm/index.html', level: 'B' },
          { name: 'JASA', fullName: 'The Journal of the Acoustical Society of America', url: 'http://scitation.aip.org/content/asa/journal/jasa', level: 'B' },
          { name: 'SIIMS', fullName: 'SIAM Journal on Imaging Sciences', url: 'https://dblp.uni-trier.de/db/journals/siamis/index.html', level: 'B' },
          { name: 'SPECOM', fullName: 'Speech Communication', url: 'https://dblp.uni-trier.de/db/journals/speech/index.html', level: 'B' }
        ],
        C: [
          { name: 'CGTA', fullName: 'Computational Geometry: Theory and Applications', url: 'https://dblp.uni-trier.de/db/journals/comgeo/index.html', level: 'C' },
          { name: 'CAVW', fullName: 'computer animation & virtual worlds', url: 'https://dblp.org/db/journals/jvca/index.html', level: 'C' },
          { name: 'C&G', fullName: 'Computers & Graphics', url: 'https://dblp.uni-trier.de/db/journals/cg/index.html', level: 'C' },
          { name: 'DCG', fullName: 'Discrete & Computational Geometry', url: 'https://dblp.uni-trier.de/db/journals/dcg/index.html', level: 'C' },
          { name: 'SPL', fullName: 'IEEE Signal Processing Letters', url: 'https://dblp.uni-trier.de/db/journals/spl/index.html', level: 'C' },
          { name: 'IET-IPR', fullName: 'IET Image Processing', url: 'https://dblp.uni-trier.de/db/journals/iet-ipr/index.html', level: 'C' },
          { name: 'JVCIR', fullName: 'Journal of Visual Communication and Image Representation', url: 'https://dblp.uni-trier.de/db/journals/jvcir/index.html', level: 'C' },
          { name: 'MS', fullName: 'Multimedia Systems', url: 'https://dblp.uni-trier.de/db/journals/mms/index.html', level: 'C' },
          { name: 'MTA', fullName: 'Multimedia Tools and Applications', url: 'https://dblp.uni-trier.de/db/journals/mta/index.html', level: 'C' },
          { name: 'SIGPRO', fullName: 'Signal Processing', url: 'https://dblp.uni-trier.de/db/journals/sigpro/index.html', level: 'C' },
          { name: 'IMAGE', fullName: 'Signal Processing: Image Communication', url: 'https://dblp.uni-trier.de/db/journals/spic/index.html', level: 'C' },
          { name: 'TVC', fullName: 'The Visual Computer', url: 'https://dblp.uni-trier.de/db/journals/vc/index.html', level: 'C' },
          { name: 'CVMJ', fullName: 'Computational Visual Media', url: 'https://dblp.org/db/journals/cvm/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'ACM MM', fullName: 'ACM International Conference on Multimedia', url: 'https://dblp.uni-trier.de/db/conf/mm/index.html', level: 'A' },
          { name: 'SIGGRAPH', fullName: 'ACM Special Interest Group on Computer Graphics', url: 'https://dblp.uni-trier.de/db/conf/siggraph/index.html', level: 'A' },
          { name: 'VR', fullName: 'IEEE Virtual Reality', url: 'https://dblp.uni-trier.de/db/conf/vr/index.html', level: 'A' },
          { name: 'IEEE VIS', fullName: 'IEEE Visualization Conference', url: 'https://dblp.uni-trier.de/db/conf/visualization/index.html', level: 'A' }
        ],
        B: [
          { name: 'ICMR', fullName: 'ACM SIGMM International Conference on Multimedia Retrieval', url: 'https://dblp.uni-trier.de/db/conf/mir/index.html', level: 'B' },
          { name: 'I3D', fullName: 'ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games', url: 'https://dblp.uni-trier.de/db/conf/si3d/index.html', level: 'B' },
          { name: 'SCA', fullName: 'ACM SIGGRAPH/Eurographics Symposium on Computer Animation', url: 'https://dblp.uni-trier.de/db/conf/sca/index.html', level: 'B' },
          { name: 'DCC', fullName: 'Data Compression Conference', url: 'https://dblp.uni-trier.de/db/conf/dcc/index.html', level: 'B' },
          { name: 'Eurographics', fullName: 'Annual Conference of the European Association for Computer Graphics', url: 'https://dblp.uni-trier.de/db/conf/eurographics/index.html', level: 'B' },
          { name: 'EuroVis', fullName: 'Eurographics Conference on Visualization', url: 'https://dblp.uni-trier.de/db/conf/vissym/index.html', level: 'B' },
          { name: 'SGP', fullName: 'Eurographics Symposium on Geometry Processing', url: 'https://dblp.uni-trier.de/db/conf/sgp/index.html', level: 'B' },
          { name: 'EGSR', fullName: 'Eurographics Symposium on Rendering', url: 'https://dblp.uni-trier.de/db/conf/rt/index.html', level: 'B' },
          { name: 'ICASSP', fullName: 'IEEE International Conference on Acoustics, Speech and Signal Processing', url: 'https://dblp.uni-trier.de/db/conf/icassp/index.html', level: 'B' },
          { name: 'ICME', fullName: 'IEEE International Conference on Multimedia & Expo', url: 'https://dblp.uni-trier.de/db/conf/icmcs/index.html', level: 'B' },
          { name: 'ISMAR', fullName: 'International Symposium on Mixed and Augmented Reality', url: 'https://dblp.uni-trier.de/db/conf/ismar/index.html', level: 'B' },
          { name: 'PG', fullName: 'Pacific Conference on Computer Graphics and Applications', url: 'https://dblp.uni-trier.de/db/conf/pg/index.html', level: 'B' },
          { name: 'SPM', fullName: 'Symposium on Solid and Physical Modeling', url: 'https://dblp.uni-trier.de/db/conf/sma/index.html', level: 'B' }
        ],
        C: [
          { name: 'VRST', fullName: 'ACM Symposium on Virtual Reality Software and Technology', url: 'http://dblp2.uni-trier.de/db/conf/vrst/', level: 'C' },
          { name: 'CASA', fullName: 'International Conference on Computer Animation and Social Agents', url: 'https://dblp.uni-trier.de/db/conf/ca/index.html', level: 'C' },
          { name: 'CGI', fullName: 'Computer Graphics International', url: 'https://dblp.uni-trier.de/db/conf/cgi/index.html', level: 'C' },
          { name: 'INTERSPEECH', fullName: 'Conference of the International Speech Communication Association', url: 'https://dblp.uni-trier.de/db/conf/interspeech/index.html', level: 'C' },
          { name: 'GMP', fullName: 'Geometric Modeling and Processing', url: 'https://dblp.uni-trier.de/db/conf/gmp/index.html', level: 'C' },
          { name: 'PacificVis', fullName: 'IEEE Pacific Visualization Symposium', url: 'https://dblp.uni-trier.de/db/conf/apvis/index.html', level: 'C' },
          { name: '3DV', fullName: 'International Conference on 3D Vision', url: 'https://dblp.uni-trier.de/db/conf/3dim/index.html', level: 'C' },
          { name: 'CAD/Graphics', fullName: 'International Conference on Computer-Aided Design and Computer Graphics', url: 'https://dblp.uni-trier.de/db/conf/cadgraphics/index.html', level: 'C' },
          { name: 'ICIP', fullName: 'IEEE International Conference on Image Processing', url: 'https://dblp.uni-trier.de/db/conf/icip/index.html', level: 'C' },
          { name: 'MMM', fullName: 'International Conference on Multimedia Modeling', url: 'https://dblp.uni-trier.de/db/conf/mmm/index.html', level: 'C' },
          { name: 'MMAsia', fullName: 'ACM Multimedia Asia', url: 'https://dblp.uni-trier.de/db/conf/mmasia/index.html', level: 'C' },
          { name: 'SMI', fullName: 'Shape Modeling International', url: 'https://dblp.uni-trier.de/db/conf/smi/index.html', level: 'C' },
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
          { name: 'AI', fullName: 'Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/journals/ai/index.html', level: 'A' },
          { name: 'TPAMI', fullName: 'IEEE Transactions on Pattern Analysis and Machine Intelligence', url: 'https://dblp.uni-trier.de/db/journals/pami/index.html', level: 'A' },
          { name: 'IJCV', fullName: 'International Journal of Computer Vision', url: 'https://dblp.uni-trier.de/db/journals/ijcv/index.html', level: 'A' },
          { name: 'JMLR', fullName: 'Journal of Machine Learning Research', url: 'https://dblp.uni-trier.de/db/journals/jmlr/index.html', level: 'A' }
        ],
        B: [
          { name: 'TAP', fullName: 'ACM Transactions on Applied Perception', url: 'https://dblp.uni-trier.de/db/journals/tap/index.html', level: 'B' },
          { name: 'TSLP', fullName: 'ACM Transactions on Speech and Language (2013年已停刊)', url: 'https://dblp.uni-trier.de/db/journals/tslp/index.html', level: 'B' },
          { name: 'AAMAS (J)', fullName: 'Autonomous Agents and Multi-Agent Systems', url: 'https://dblp.uni-trier.de/db/journals/aamas/index.html', level: 'B' },
          { name: '', fullName: 'Computational Linguistics', url: 'https://dblp.uni-trier.de/db/journals/coling/index.html', level: 'B' },
          { name: 'CVIU', fullName: 'Computer Vision and Image Understanding', url: 'https://dblp.uni-trier.de/db/journals/cviu/index.html', level: 'B' },
          { name: 'DKE', fullName: 'Data & Knowledge Engineering', url: 'https://dblp.uni-trier.de/db/journals/dke/index.html', level: 'B' },
          { name: '', fullName: 'Evolutionary Computation', url: 'https://dblp.uni-trier.de/db/journals/ec/index.html', level: 'B' },
          { name: 'TAC', fullName: 'IEEE Transactions on Affective Computing', url: 'https://dblp.uni-trier.de/db/journals/taffco/index.html', level: 'B' },
          { name: 'TASLP', fullName: 'IEEE/ACM Transactions on Audio, Speech and Language Processing', url: 'https://dblp.uni-trier.de/db/journals/taslp/index.html', level: 'B' },
          { name: '', fullName: 'IEEE Transactions on Cybernetics', url: 'https://dblp.uni-trier.de/db/journals/tcyb/index.html', level: 'B' },
          { name: 'TEC', fullName: 'IEEE Transactions on Evolutionary Computation', url: 'https://dblp.uni-trier.de/db/journals/tec/index.html', level: 'B' },
          { name: 'TFS', fullName: 'IEEE Transactions on Fuzzy Systems', url: 'https://dblp.uni-trier.de/db/journals/tfs/index.html', level: 'B' },
          { name: 'TNNLS', fullName: 'IEEE Transactions on Neural Networks and learning systems', url: 'https://dblp.uni-trier.de/db/journals/tnn/index.html', level: 'B' },
          { name: 'IJAR', fullName: 'International Journal of Approximate Reasoning', url: 'https://dblp.uni-trier.de/db/journals/ijar/index.html', level: 'B' },
          { name: 'JAIR', fullName: 'Journal of Artificial Intelligence Research', url: 'https://dblp.uni-trier.de/db/journals/jair/index.html', level: 'B' },
          { name: '', fullName: 'Journal of Automated Reasoning', url: 'https://dblp.uni-trier.de/db/journals/jar/index.html', level: 'B' },
          { name: 'JSLHR', fullName: 'Journal of Speech, Language, and Hearing Research', url: 'http://jslhr.pubs.asha.org/', level: 'B' },
          { name: '', fullName: 'Machine Learning', url: 'https://dblp.uni-trier.de/db/journals/ml/index.html', level: 'B' },
          { name: '', fullName: 'Neural Computation', url: 'https://dblp.uni-trier.de/db/journals/neco/index.html', level: 'B' },
          { name: '', fullName: 'Neural Networks', url: 'https://dblp.uni-trier.de/db/journals/nn/index.html', level: 'B' },
          { name: 'PR', fullName: 'Pattern Recognition', url: 'https://dblp.uni-trier.de/db/conf/par/index.html', level: 'B' },
          { name: 'TACL', fullName: 'Transactions of the Association for Computational Linguistics', url: 'https://dblp.org/db/journals/tacl/index.html', level: 'B' }
        ],
        C: [
          { name: 'TALLIP', fullName: 'ACM Transactions on Asian and Low-Resource Language Information Processing', url: 'https://dblp.uni-trier.de/db/journals/talip/index.html', level: 'C' },
          { name: '', fullName: 'Applied Intelligence', url: 'https://dblp.uni-trier.de/db/journals/apin/index.html', level: 'C' },
          { name: 'AIM', fullName: 'Artificial Intelligence in Medicine', url: 'https://dblp.uni-trier.de/db/journals/artmed/index.html', level: 'C' },
          { name: '', fullName: 'Artificial Life', url: 'https://dblp.uni-trier.de/db/journals/alife/index.html', level: 'C' },
          { name: '', fullName: 'Computational Intelligence', url: 'https://dblp.uni-trier.de/db/journals/ci/index.html', level: 'C' },
          { name: '', fullName: 'Computer Speech & Language', url: 'https://dblp.uni-trier.de/db/journals/csl/index.html', level: 'C' },
          { name: '', fullName: 'Connection Science', url: 'https://dblp.uni-trier.de/db/journals/connection/index.html', level: 'C' },
          { name: 'DSS', fullName: 'Decision Support Systems', url: 'https://dblp.uni-trier.de/db/journals/dss/index.html', level: 'C' },
          { name: 'EAAI', fullName: 'Engineering Applications of Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/journals/eaai/index.html', level: 'C' },
          { name: '', fullName: 'Expert Systems', url: 'https://dblp.uni-trier.de/db/journals/es/index.html', level: 'C' },
          { name: 'ESWA', fullName: 'Expert Systems with Applications', url: 'https://dblp.uni-trier.de/db/journals/eswa/index.html', level: 'C' },
          { name: '', fullName: 'Fuzzy Sets and Systems', url: 'https://dblp.uni-trier.de/db/journals/fss/index.html', level: 'C' },
          { name: 'TG', fullName: 'IEEE Transactions on Games', url: 'https://dblp.uni-trier.de/db/journals/tciaig/index.html', level: 'C' },
          { name: 'IET-CVI', fullName: 'IET Computer Vision', url: 'https://dblp.org/db/journals/iet-cvi/index.html', level: 'C' },
          { name: '', fullName: 'IET Signal Processing', url: 'https://dblp.org/db/journals/iet-spr/index.html', level: 'C' },
          { name: 'IVC', fullName: 'Image and Vision Computing', url: 'https://dblp.uni-trier.de/db/journals/ivc/index.html', level: 'C' },
          { name: 'IDA', fullName: 'Intelligent Data Analysis', url: 'https://dblp.uni-trier.de/db/journals/ida/index.html', level: 'C' },
          { name: 'IJCIA', fullName: 'International Journal of Computational Intelligence and Applications', url: 'https://dblp.uni-trier.de/db/journals/ijcia/index.html', level: 'C' },
          { name: 'IJIS', fullName: 'International Journal of Intelligent Systems', url: 'https://dblp.uni-trier.de/db/journals/ijis/index.html', level: 'C' },
          { name: 'IJNS', fullName: 'International Journal of Neural Systems', url: 'https://dblp.uni-trier.de/db/journals/ijns/index.html', level: 'C' },
          { name: 'IJPRAI', fullName: 'International Journal of Pattern Recognition and Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/journals/ijprai/index.html', level: 'C' },
          { name: 'IJUFKS', fullName: 'International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems', url: 'https://dblp.uni-trier.de/db/journals/ijufks/index.html', level: 'C' },
          { name: 'IJDAR', fullName: 'International Journal on Document Analysis and Recognition', url: 'https://dblp.uni-trier.de/db/journals/ijdar/index.html', level: 'C' },
          { name: 'JETAI', fullName: 'Journal of Experimental and Theoretical Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/journals/jetai/index.html', level: 'C' },
          { name: 'KBS', fullName: 'Knowledge-Based Systems', url: 'https://dblp.uni-trier.de/db/journals/kbs/index.html', level: 'C' },
          { name: '', fullName: 'Machine Translation', url: 'https://dblp.uni-trier.de/db/journals/mt/index.html', level: 'C' },
          { name: '', fullName: 'Machine Vision and Applications', url: 'https://dblp.uni-trier.de/db/journals/mva/index.html', level: 'C' },
          { name: '', fullName: 'Natural Computing', url: 'https://dblp.uni-trier.de/db/journals/nc/index.html', level: 'C' },
          { name: 'NLE', fullName: 'Natural Language Engineering', url: 'https://dblp.uni-trier.de/db/journals/nle/index.html', level: 'C' },
          { name: 'NCA', fullName: 'Neural Computing and Applications', url: 'https://dblp.uni-trier.de/db/journals/nca/index.html', level: 'C' },
          { name: 'NPL', fullName: 'Neural Processing Letters', url: 'https://dblp.uni-trier.de/db/journals/npl/index.html', level: 'C' },
          { name: '', fullName: 'Neurocomputing', url: 'https://dblp.uni-trier.de/db/journals/ijon/index.html', level: 'C' },
          { name: 'PAA', fullName: 'Pattern Analysis and Applications', url: 'https://dblp.uni-trier.de/db/journals/paa/index.html', level: 'C' },
          { name: 'PRL', fullName: 'Pattern Recognition Letters', url: 'https://dblp.uni-trier.de/db/journals/prl/index.html', level: 'C' },
          { name: '', fullName: 'Soft Computing', url: 'https://dblp.uni-trier.de/db/journals/soco/index.html', level: 'C' },
          { name: 'WI', fullName: 'Web Intelligence', url: 'https://dblp.uni-trier.de/db/journals/wias/index.html', level: 'C' },
          { name: 'TIIS', fullName: 'ACM Transactions on Interactive Intelligent Systems', url: 'https://dblp.org/db/journals/tiis/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'AAAI', fullName: 'AAAI Conference on Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/aaai/index.html', level: 'A' },
          { name: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', url: 'https://dblp.uni-trier.de/db/conf/nips/index.html', level: 'A' },
          { name: 'ACL', fullName: 'Annual Meeting of the Association for Computational Linguistics', url: 'https://dblp.uni-trier.de/db/conf/acl/index.html', level: 'A' },
          { name: 'CVPR', fullName: 'IEEE/CVF Computer Vision and Pattern Recognition Conference', url: 'https://dblp.uni-trier.de/db/conf/cvpr/index.html', level: 'A' },
          { name: 'ICCV', fullName: 'International Conference on Computer Vision', url: 'https://dblp.uni-trier.de/db/conf/iccv/index.html', level: 'A' },
          { name: 'ICML', fullName: 'International Conference on Machine Learning', url: 'https://dblp.uni-trier.de/db/conf/icml/index.html', level: 'A' },
          { name: 'IJCAI', fullName: 'International Joint Conference on Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/ijcai/index.html', level: 'A' }
        ],
        B: [
          { name: 'COLT', fullName: 'Annual Conference on Computational Learning Theory', url: 'https://dblp.uni-trier.de/db/conf/colt/index.html', level: 'B' },
          { name: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', url: 'https://dblp.uni-trier.de/db/conf/emnlp/index.html', level: 'B' },
          { name: 'ECAI', fullName: 'European Conference on Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/ecai/index.html', level: 'B' },
          { name: 'ECCV', fullName: 'European Conference on Computer Vision', url: 'https://dblp.uni-trier.de/db/conf/eccv/index.html', level: 'B' },
          { name: 'ICRA', fullName: 'IEEE International Conference on Robotics and Automation', url: 'https://dblp.uni-trier.de/db/conf/icra/index.html', level: 'B' },
          { name: 'ICAPS', fullName: 'International Conference on Automated Planning and Scheduling', url: 'https://dblp.uni-trier.de/db/conf/aips/index.html', level: 'B' },
          { name: 'ICCBR', fullName: 'International Conference on Case-Based Reasoning', url: 'https://dblp.uni-trier.de/db/conf/iccbr/index.html', level: 'B' },
          { name: 'COLING', fullName: 'International Conference on Computational Linguistics', url: 'https://dblp.uni-trier.de/db/conf/coling/index.html', level: 'B' },
          { name: 'KR', fullName: 'International Conference on Principles of Knowledge Representation and Reasoning', url: 'https://dblp.uni-trier.de/db/conf/kr/index.html', level: 'B' },
          { name: 'UAI', fullName: 'Conference on Uncertainty in Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/uai/index.html', level: 'B' },
          { name: 'AAMAS', fullName: 'International Joint Conference on Autonomous Agents and Multi-agent Systems', url: 'https://dblp.uni-trier.de/db/conf/atal/index.html', level: 'B' },
          { name: 'PPSN', fullName: 'Parallel Problem Solving from Nature', url: 'https://dblp.uni-trier.de/db/conf/ppsn/index.html', level: 'B' },
          { name: 'NAACL', fullName: 'North American Chapter of the Association for Computational Linguistics', url: 'https://dblp.uni-trier.de/db/conf/naacl/index.html', level: 'B' }
        ],
        C: [
          { name: 'AISTATS', fullName: 'International Conference on Artificial Intelligence and Statistics', url: 'https://dblp.uni-trier.de/db/conf/aistats/index.html', level: 'C' },
          { name: 'ACCV', fullName: 'Asian Conference on Computer Vision', url: 'https://dblp.uni-trier.de/db/conf/accv/index.html', level: 'C' },
          { name: 'ACML', fullName: 'Asian Conference on Machine Learning', url: 'https://dblp.uni-trier.de/db/conf/acml/index.html', level: 'C' },
          { name: 'BMVC', fullName: 'British Machine Vision Conference', url: 'https://dblp.uni-trier.de/db/conf/bmvc/index.html', level: 'C' },
          { name: 'NLPCC', fullName: 'CCF International Conference on Natural Language Processing and Chinese Computing', url: 'https://dblp.uni-trier.de/db/conf/nlpcc/index.html', level: 'C' },
          { name: 'CoNLL', fullName: 'Conference on Computational Natural Language Learning', url: 'https://dblp.uni-trier.de/db/conf/conll', level: 'C' },
          { name: 'GECCO', fullName: 'Genetic and Evolutionary Computation Conference', url: 'https://dblp.uni-trier.de/db/conf/gecco/index.html', level: 'C' },
          { name: 'ICTAI', fullName: 'IEEE International Conference on Tools with Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/ictai/index.html', level: 'C' },
          { name: 'IROS', fullName: 'IEEE\\RSJ International Conference on Intelligent Robots and Systems', url: 'https://dblp.uni-trier.de/db/conf/iros/index.html', level: 'C' },
          { name: 'ALT', fullName: 'International Conference on Algorithmic Learning Theory', url: 'https://dblp.uni-trier.de/db/conf/alt/index.html', level: 'C' },
          { name: 'ICANN', fullName: 'International Conference on Artificial Neural Networks', url: 'https://dblp.uni-trier.de/db/conf/icann/index.html', level: 'C' },
          { name: 'FG', fullName: 'IEEE International Conference on Automatic Face and Gesture Recognition', url: 'https://dblp.uni-trier.de/db/conf/fgr/index.html', level: 'C' },
          { name: 'ICDAR', fullName: 'International Conference on Document Analysis and Recognition', url: 'https://dblp.uni-trier.de/db/conf/icdar/index.html', level: 'C' },
          { name: 'ILP', fullName: 'International Conference on Inductive Logic Programming', url: 'https://dblp.uni-trier.de/db/conf/ilp/index.html', level: 'C' },
          { name: 'KSEM', fullName: 'International conference on Knowledge Science, Engineering and Management', url: 'https://dblp.uni-trier.de/db/conf/ksem/index.html', level: 'C' },
          { name: 'ICONIP', fullName: 'International Conference on Neural Information Processing', url: 'https://dblp.uni-trier.de/db/conf/iconip/index.html', level: 'C' },
          { name: 'ICPR', fullName: 'International Conference on Pattern Recognition', url: 'https://dblp.uni-trier.de/db/conf/icpr/index.html', level: 'C' },
          { name: 'IJCB', fullName: 'International Joint Conference on Biometrics', url: 'https://dblp.uni-trier.de/db/conf/icb/index.html', level: 'C' },
          { name: 'IJCNN', fullName: 'International Joint Conference on Neural Networks', url: 'https://dblp.uni-trier.de/db/conf/ijcnn/index.html', level: 'C' },
          { name: 'PRICAI', fullName: 'Pacific Rim International Conference on Artificial Intelligence', url: 'https://dblp.uni-trier.de/db/conf/pricai/index.html', level: 'C' }
        ]
      }
    },
    // 人机交互与普适计算
    hci: {
      journal: {
        A: [
          { name: 'TOCHI', fullName: 'ACM Transactions on Computer-Human Interaction', url: 'https://dblp.uni-trier.de/db/journals/tochi/index.html', level: 'A' },
          { name: 'IJHCS', fullName: 'International Journal of Human-Computer Studies', url: 'https://dblp.uni-trier.de/db/journals/ijmms/index.html', level: 'A' }
        ],
        B: [
          { name: 'CSCW (J)', fullName: 'Computer Supported Cooperative Work', url: 'https://dblp.uni-trier.de/db/journals/cscw/index.html', level: 'B' },
          { name: 'HCI', fullName: 'Human-Computer Interaction', url: 'https://dblp.uni-trier.de/db/journals/hhci/index.html', level: 'B' },
          { name: '', fullName: 'IEEE Transactions on Human-Machine Systems', url: 'https://dblp.uni-trier.de/db/journals/thms/index.html', level: 'B' },
          { name: 'IWC', fullName: 'Interacting with Computers', url: 'https://dblp.uni-trier.de/db/journals/iwc/index.html', level: 'B' },
          { name: 'IJHCI', fullName: 'International Journal of Human-Computer Interaction', url: 'https://dblp.uni-trier.de/db/journals/ijhci/index.html', level: 'B' },
          { name: 'UMUAI', fullName: 'User Modeling and User-Adapted Interaction', url: 'https://dblp.uni-trier.de/db/journals/umuai/index.html', level: 'B' },
          { name: 'TSMC', fullName: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems', url: 'https://dblp.org/db/journals/tsmc/tsmc12.html', level: 'B' }
        ],
        C: [
          { name: 'BIT', fullName: 'Behaviour & Information Technology', url: 'https://dblp.uni-trier.de/db/journals/behaviourIT/index.html', level: 'C' },
          { name: 'PUC', fullName: 'Personal and Ubiquitous Computing', url: 'https://dblp.uni-trier.de/db/journals/puc/index.html', level: 'C' },
          { name: 'PMC', fullName: 'Pervasive and Mobile Computing', url: 'https://dblp.uni-trier.de/db/journals/percom/index.html', level: 'C' },
          { name: 'PACMHCI', fullName: 'Proceedings of the ACM on Human-Computer Interaction', url: 'https://dblp.org/db/journals/pacmhci/index.html', level: 'C' }
        ]
      },
      conference: {
        A: [
          { name: 'CSCW', fullName: 'ACM Conference On Computer-Supported Cooperative Work And Social Computing', url: 'https://dblp.uni-trier.de/db/conf/cscw/index.html', level: 'A' },
          { name: 'CHI', fullName: 'ACM Conference on Human Factors in Computing Systems', url: 'https://dblp.uni-trier.de/db/conf/chi/index.html', level: 'A' },
          { name: 'UbiComp', fullName: 'ACM international joint conference on Pervasive and Ubiquitous Computing', url: 'https://dblp.uni-trier.de/db/conf/huc/index.html', level: 'A' },
          { name: 'UIST', fullName: 'ACM Symposium on User Interface Software and Technology', url: 'https://dblp.uni-trier.de/db/conf/uist/index.html', level: 'A' }
        ],
        B: [
          { name: 'GROUP', fullName: 'ACM International Conference on Supporting Group Work', url: 'https://dblp.uni-trier.de/db/conf/group/index.html', level: 'B' },
          { name: 'IUI', fullName: 'ACM International Conference on Intelligent User Interfaces', url: 'https://dblp.uni-trier.de/db/conf/iui/index.html', level: 'B' },
          { name: 'ITS', fullName: 'ACM International Conference on Interactive Tabletops and Surfaces', url: 'https://dblp.uni-trier.de/db/conf/tabletop/index.html', level: 'B' },
          { name: 'ECSCW', fullName: 'European Conference on Computer Supported Cooperative Work', url: 'https://dblp.uni-trier.de/db/conf/ecscw/index.html', level: 'B' },
          { name: 'PERCOM', fullName: 'IEEE International Conference on Pervasive Computing and Communications', url: 'https://dblp.uni-trier.de/db/conf/percom/index.html', level: 'B' },
          { name: 'MobileHCI', fullName: 'ACM International Conference on Mobile Human-Computer Interaction', url: 'https://dblp.uni-trier.de/db/conf/mhci/index.html', level: 'B' },
          { name: 'ICWSM', fullName: 'The International AAAI Conference on Web and Social Media', url: 'https://dblp.org/db/conf/icwsm/index.html', level: 'B' }
        ],
        C: [
          { name: 'DIS', fullName: 'ACM SIGCHI Conference on Designing Interactive Systems', url: 'https://dblp.uni-trier.de/db/conf/ACMdis/index.html', level: 'C' },
          { name: 'ICMI', fullName: 'ACM International Conference on Multimodal Interaction', url: 'https://dblp.uni-trier.de/db/conf/icmi/index.html', level: 'C' },
          { name: 'ASSETS', fullName: 'International ACM SIGACCESS Conference on Computers and Accessibility', url: 'https://dblp.uni-trier.de/db/conf/assets/index.html', level: 'C' },
          { name: 'GI', fullName: 'Graphics Interface', url: 'https://dblp.uni-trier.de/db/conf/graphicsinterface/index.html', level: 'C' },
          { name: 'UIC', fullName: 'IEEE International Conference on Ubiquitous Intelligence and Computing', url: 'https://dblp.uni-trier.de/db/conf/uic/index.html', level: 'C' },
          { name: '', fullName: 'IEEE World Haptics Conference', url: 'https://dblp.uni-trier.de/db/conf/haptics/index.html', level: 'C' },
          { name: 'INTERACT', fullName: 'International Conference on Human-Computer Interaction of International Federation for Information Processing', url: 'https://dblp.uni-trier.de/db/conf/interact/index.html', level: 'C' },
          { name: 'IDC', fullName: 'ACM Interaction Design and Children', url: 'https://dblp.uni-trier.de/db/conf/acmidc/index.html', level: 'C' },
          { name: 'CollaborateCom', fullName: 'International Conference on Collaborative Computing: Networking, Applications and Worksharing', url: 'https://dblp.uni-trier.de/db/conf/colcom/index.html', level: 'C' },
          { name: 'CSCWD', fullName: 'International Conference on Computer Supported Cooperative Work in Design', url: 'https://dblp.uni-trier.de/db/conf/cscwd/index.html', level: 'C' },
          { name: 'CoopIS', fullName: 'International Conference on Cooperative Information Systems', url: 'https://dblp.uni-trier.de/db/conf/coopis/index.html', level: 'C' },
          { name: 'MobiQuitous', fullName: 'International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services', url: 'https://dblp.uni-trier.de/db/conf/mobiquitous/index.html', level: 'C' },
          { name: 'AVI', fullName: 'International Working Conference on Advanced Visual Interfaces', url: 'https://dblp.uni-trier.de/db/conf/avi/index.html', level: 'C' }
        ]
      }
    },
    // 交叉/综合/新兴
    interdisciplinary: {
      journal: {
        A: [
          { name: 'JACM', fullName: 'Journal of the ACM', url: 'https://dblp.uni-trier.de/db/journals/jacm/index.html', level: 'A' },
          { name: 'Proc. IEEE', fullName: 'Proceedings of the IEEE', url: 'https://dblp.uni-trier.de/db/journals/pieee/index.html', level: 'A' },
          { name: 'SCIS', fullName: 'Science China Information Sciences', url: 'https://dblp.uni-trier.de/db/journals/chinaf/index.html', level: 'A' }
        ],
        B: [
          { name: '', fullName: 'Bioinformatics', url: 'https://dblp.uni-trier.de/db/journals/bioinformatics/index.html', level: 'B' },
          { name: '', fullName: 'Briefings in Bioinformatics', url: 'https://dblp.uni-trier.de/db/journals/bib/index.html', level: 'B' },
          { name: 'Cognition', fullName: 'Cognition', url: 'http://www.journals.elsevier.com/cognition/', level: 'B' },
          { name: 'TASAE', fullName: 'IEEE Transactions on Automation Science and Engineering', url: 'https://dblp.uni-trier.de/db/journals/tase/index.html', level: 'B' },
          { name: 'TGARS', fullName: 'IEEE Transactions on Geoscience and Remote Sensing', url: 'https://dblp.uni-trier.de/db/journals/tgrs/index.html', level: 'B' },
          { name: 'TITS', fullName: 'IEEE Transactions on Intelligent Transportation Systems', url: 'https://dblp.uni-trier.de/db/journals/tits/index.html', level: 'B' },
          { name: 'TMI', fullName: 'IEEE Transactions on Medical Imaging', url: 'https://dblp.uni-trier.de/db/journals/tmi/index.html', level: 'B' },
          { name: 'TR', fullName: 'IEEE Transactions on Robotics', url: 'https://dblp.uni-trier.de/db/journals/trob/index.html', level: 'B' },
          { name: 'TCBB', fullName: 'IEEE/ACM Transactions on Computational Biology and Bioinformatics', url: 'https://dblp.uni-trier.de/db/journals/tcbb/index.html', level: 'B' },
          { name: 'JCST', fullName: 'Journal of Computer Science and Technology', url: 'https://dblp.uni-trier.de/db/journals/jcst/index.html', level: 'B' },
          { name: 'JAMIA', fullName: 'Journal of the American Medical Informatics Association', url: 'https://dblp.uni-trier.de/db/journals/jamia/index.html', level: 'B' },
          { name: '', fullName: 'PLOS Computational Biology', url: 'https://dblp.uni-trier.de/db/journals/ploscb/index.html', level: 'B' },
          { name: '', fullName: 'The Computer Journal', url: 'https://dblp.uni-trier.de/db/journals/cj/index.html', level: 'B' },
          { name: 'WWW (J)', fullName: 'World Wide Web', url: 'https://dblp.org/db/journals/www/index.html', level: 'B' },
          { name: 'FCS', fullName: 'Frontiers of Computer Science', url: 'https://dblp.uni-trier.de/db/journals/fcsc/index.html', level: 'B' }
        ],
        C: [
          { name: '', fullName: 'BMC Bioinformatics', url: 'https://dblp.uni-trier.de/db/journals/bmcbi/index.html', level: 'C' },
          { name: '', fullName: 'Cybernetics and Systems', url: 'https://dblp.uni-trier.de/db/journals/cas/index.html', level: 'C' },
          { name: '', fullName: 'IEEE Geoscience and Remote Sensing Letters', url: 'https://dblp.uni-trier.de/db/journals/lgrs/index.html', level: 'C' },
          { name: 'JBHI', fullName: 'IEEE Journal of Biomedical and Health Informatics', url: 'https://dblp.uni-trier.de/db/journals/titb/index.html', level: 'C' },
          { name: 'TBD', fullName: 'IEEE Transactions on Big Data', url: 'https://dblp.uni-trier.de/db/journals/tbd/index.html', level: 'C' },
          { name: '', fullName: 'IET Intelligent Transport Systems', url: 'http://digital-library.theiet.org/content/journals/iet-its', level: 'C' },
          { name: 'JBI', fullName: 'Journal of Biomedical Informatics', url: 'https://dblp.uni-trier.de/db/journals/jbi/index.html', level: 'C' },
          { name: '', fullName: 'Medical Image Analysis', url: 'https://dblp.uni-trier.de/db/journals/mia/index.html', level: 'C' },
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
          { name: 'WWW', fullName: 'International World Wide Web Conference', url: 'https://dblp.uni-trier.de/db/conf/www/index.html', level: 'A' },
          { name: 'RTSS', fullName: 'IEEE Real-Time Systems Symposium', url: 'https://dblp.uni-trier.de/db/conf/rtss/index.html', level: 'A' },
          { name: 'WINE', fullName: 'Conference on Web and Internet Economics', url: 'https://dblp.org/db/conf/wine/index.html', level: 'A' }
        ],
        B: [
          { name: 'CogSci', fullName: 'Annual Meeting of the Cognitive Science Society', url: 'https://dblp.uni-trier.de/db/conf/cogsci/index.html', level: 'B' },
          { name: 'BIBM', fullName: 'IEEE International Conference on Bioinformatics and Biomedicine', url: 'https://dblp.uni-trier.de/db/conf/bibm/index.html', level: 'B' },
          { name: 'EMSOFT', fullName: 'International Conference on Embedded Software', url: 'https://dblp.uni-trier.de/db/conf/emsoft/index.html', level: 'B' },
          { name: 'ISMB', fullName: 'International conference on Intelligent Systems for Molecular Biology', url: 'https://dblp.org/db/conf/ismb/index.html', level: 'B' },
          { name: 'RECOMB', fullName: 'Annual International Conference on Research in Computational Molecular Biology', url: 'https://dblp.uni-trier.de/db/conf/recomb/index.html', level: 'B' },
          { name: 'MICCAI', fullName: 'International Conference on Medical Image Computing and Computer-Assisted Intervention', url: 'https://dblp.org/db/conf/miccai/index.html', level: 'B' }
        ],
        C: [
          { name: 'AMIA', fullName: 'American Medical Informatics Association Annual Symposium', url: 'https://dblp.uni-trier.de/db/conf/amia/index.html', level: 'C' },
          { name: 'APBC', fullName: 'Asia Pacific Bioinformatics Conference', url: 'https://dblp.uni-trier.de/db/conf/apbc/index.html', level: 'C' },
          { name: 'IEEE BigData', fullName: 'IEEE International Conference on Big Data', url: 'https://dblp.uni-trier.de/db/conf/bigdataconf/index.html', level: 'C' },
          { name: 'IEEE CLOUD', fullName: 'IEEE International Conference on Cloud Computing', url: 'https://dblp.uni-trier.de/db/conf/IEEEcloud/index.html', level: 'C' },
          { name: 'SMC', fullName: 'IEEE International Conference on Systems, Man, and Cybernetics', url: 'https://dblp.uni-trier.de/db/conf/smc/index.html', level: 'C' },
          { name: 'COSIT', fullName: 'International Conference on Spatial Information Theory', url: 'https://dblp.uni-trier.de/db/conf/cosit/index.html', level: 'C' },
          { name: 'ISBRA', fullName: 'International Symposium on Bioinformatics Research and Applications', url: 'https://dblp.uni-trier.de/db/conf/isbra/index.html', level: 'C' },
          { name: 'SAGT', fullName: 'International Symposium on Algorithmic Game Theory', url: 'https://dblp.org/db/conf/sagt/index.html', level: 'C' },
          { name: 'SIGSPATIAL', fullName: 'ACM Special Interest Group on Spatial Information', url: 'https://dblp.org/db/journals/sigspatial/index.html', level: 'C' },
          { name: 'ICIC', fullName: 'International Conference on Intelligent Computing', url: 'https://dblp.org/db/conf/icic/index.html', level: 'C' }
        ]
      }
    }
  }
  
  // 遍历所有分类和类型，为每个条目添加thcpl和cas字段
  Object.keys(data).forEach(categoryKey => {
    const category = data[categoryKey]
    ;['conference', 'journal'].forEach(type => {
      ;['A', 'B', 'C'].forEach(level => {
        if (category[type] && category[type][level]) {
          category[type][level].forEach(item => {
            // 如果name为空，将其设置为fullName
            if (!item.name) {
              item.name = item.fullName
            }
            
            // 添加TH-CPL等级（会议和期刊都可能有）
            const thcplLevel = getThcplLevel(item.name)
            if (thcplLevel) {
              item.thcpl = thcplLevel
            }
            
            // 添加中科院分区（仅期刊）
            if (type === 'journal') {
              const casPartition = getCasPartition(item.name)
              if (casPartition) {
                item.cas = casPartition
              }
            }
          })
        }
      })
    })
  })
  
  return data
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
