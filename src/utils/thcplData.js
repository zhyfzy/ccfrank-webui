// TH-CPL（清华大学计算机学科群推荐学术会议和期刊列表）数据
// 根据清华大学计算机学位评定分委员会 2019年8月13日会议通过的列表整理

export const thcplMapping = {
  // 高性能计算（High Performance Computing）
  // A类会议
  'ISCA': 'A',
  'FAST': 'A',
  'ASPLOS': 'A',
  'EuroSys': 'A',
  'HPCA': 'A',
  'SIGMETRICS': 'A',
  'FPGA': 'A',
  'USENIX ATC': 'A',
  'MICRO': 'A',
  'SC': 'A',
  'PPoPP': 'A',
  'DAC': 'A',
  
  // B类会议
  'HPDC': 'B',
  'SoCC': 'B',
  'RTAS': 'B',
  'MSST': 'B',
  'CGO': 'B',
  'PACT': 'B',
  'CODES+ISSS': 'B',
  'PODC': 'B',
  'VEE': 'B',
  'IPDPS': 'B',
  'ICS': 'B',
  'DATE': 'B',
  'SPAA': 'B',
  'Performance': 'B',
  'ICDCS': 'B',
  'ICCAD': 'B',
  'CCGRID': 'B',
  'HOT CHIPS': 'B',
  'CLUSTER': 'B',
  'ASP-DAC': 'B',
  'ISLPED': 'B',
  'RTSS': 'B',
  'ICCD': 'B',
  'ISCAS': 'B',
  'ISPD': 'B',
  'ICPP': 'B',
  'IEDM': 'B',
  'ISSCC': 'B',
  
  // A类期刊
  'TOCS': 'A',
  'TPDS': 'A',
  'TC': 'A',
  'TCAD': 'A',
  'TOS': 'A',
  
  // B类期刊
  'TAAS': 'B',
  'JPDC': 'B',
  'TVLSI': 'B',
  'TACO': 'B',
  'PARCO': 'B',
  'TCC (J)': 'B',  // IEEE Transactions on Cloud Computing (期刊)
  'JETC': 'B',
  
  // 计算机网络（Computer Networks）
  // A类会议
  'SIGCOMM': 'A',
  'NSDI': 'A',
  'MobiCom': 'A',
  'MobiSys': 'A',
  'IMC': 'A',
  'IPSN': 'A',
  'SenSys': 'A',
  'INFOCOM': 'A',
  'CoNEXT': 'A',
  'ICNP': 'A',
  
  // B类会议
  'MobiHoc': 'B',
  'HotNets': 'B',
  'Globecom': 'B',
  'ICC': 'B',
  'NOSSDAV': 'B',
  'SECON': 'B',
  'Networking': 'B',
  'WoWMoM': 'B',
  'WCNC': 'B',
  'ANCS': 'B',
  'IWQoS': 'B',
  'WiOpt': 'B',
  'ICN': 'B',
  'CNSM': 'B',
  
  // A类期刊
  'JSAC': 'A',
  'TMC': 'A',
  'TON': 'A',
  'TCOM': 'A',
  
  // B类期刊
  'TWC': 'B',
  'TOSN': 'B',
  'CN': 'B',
  'TNSM': 'B',
  'CC (Net)': 'B',  // Computer Communications (网络期刊)
  'MONET': 'B',
  'TOMCCAP': 'B',
  'TOIT': 'B',
  'TVT': 'B',
  
  // 网络与信息安全（Network and Information Security）
  // A类会议
  'S&P': 'A',
  'NDSS': 'A',
  'USENIX Security': 'A',
  'CCS': 'A',
  'EUROCRYPT': 'A',
  'CRYPTO': 'A',
  'CHES': 'A',
  'ASIACRYPT': 'A',
  
  // B类会议
  'SOUPS': 'B',
  'FC': 'B',
  'PETS': 'B',
  'TCC': 'B',  // Theory of Cryptography Conference (会议)
  'PKC': 'B',
  'DIMVA': 'B',
  'CSFW': 'B',
  'FSE': 'B',  // Fast Software Encryption (安全领域)
  'ESORICS': 'B',
  'DSN': 'B',
  'RAID': 'B',
  'IM': 'B',
  'CT-RSA': 'B',
  'ACSAC': 'B',
  'PAM': 'B',
  'SAC': 'B',
  'AsiaCCS': 'B',
  'WiSec': 'B',
  'ACNS': 'B',
  'IH&MMSec': 'B',
  'SEC': 'B',
  'NOMS': 'B',
  
  // A类期刊
  'TIFS': 'A',
  'TDSC': 'A',
  
  // B类期刊
  'JCS': 'B',
  'TOPS': 'B',
  
  // 理论计算机科学（Theoretical Computer Science）
  // A类会议
  'STOC': 'A',
  'FOCS': 'A',
  'SODA': 'A',
  'CAV': 'A',
  'LICS': 'A',
  'CCC': 'A',
  'ICALP': 'A',
  
  // B类会议
  'SAT': 'B',
  'CADE/IJCAR': 'B',
  'SoCG': 'B',
  'CONCUR': 'B',
  'STACS': 'B',
  'ESA': 'B',
  'CSL': 'B',
  'FMCAD': 'B',
  'ITCS/ICS': 'B',
  'SWAT/WADS': 'B',
  'ISIT': 'B',
  
  // A类期刊
  'SICOMP': 'A',
  'TIT': 'A',
  'TALG': 'A',
  'IANDC': 'A',
  
  // B类期刊
  'TOMS': 'B',
  'JCSS': 'B',
  'FGCS': 'B',
  'Algorithmica': 'B',
  'INFORMS': 'B',
  'TOCL': 'B',
  'JGC': 'B',
  'FMSD': 'B',
  'JGO': 'B',
  'JSC': 'B',
  'FAC': 'B',
  'TCS': 'B',
  
  // 系统软件与软件工程（System Software and Software Engineering）
  // A类会议
  'OSDI': 'A',
  'ICSE': 'A',
  'SOSP': 'A',
  'POPL': 'A',
  'PLDI': 'A',
  'FSE/ESEC': 'A',
  'ISSTA': 'A',
  'OOPSLA': 'A',
  'ASE': 'A',  // International Conference on Automated Software Engineering (会议)
  
  // B类会议
  'MSR': 'B',
  'SANER': 'B',
  'Middleware': 'B',
  'EASE': 'B',
  'ICPC': 'B',
  'ICSME': 'B',
  'ISPASS': 'B',
  'ECOOP': 'B',
  'ICST': 'B',
  'ICFP': 'B',
  'RE': 'B',
  'CAiSE': 'B',
  'HotOS': 'B',
  'ETAPS': 'B',
  'VMCAI': 'B',
  'ISSRE': 'B',
  'MoDELS': 'B',
  'ESEM': 'B',
  'FM': 'B',
  'EMSOFT': 'B',
  'SCC': 'B',
  'ICWS': 'B',
  'CP': 'B',
  'ATVA': 'B',
  
  // A类期刊
  'TSE': 'A',
  'TOSEM': 'A',
  'TOPLAS': 'A',
  
  // B类期刊
  'TSC': 'B',
  'IST': 'B',
  'ESE': 'B',
  'SoSyM': 'B',
  'JSS': 'B',
  'SCP': 'B',
  'STTT': 'B',
  'STVR': 'B',
  'SPE': 'B',
  
  // 数据库与数据挖掘（Database and Data Mining）
  // A类会议
  'SIGMOD': 'A',
  'SIGKDD': 'A',
  'SIGIR': 'A',
  'WSDM': 'A',
  'VLDB': 'A',
  'ICDE': 'A',
  'PODS': 'A',
  
  // B类会议
  'ISWC': 'B',
  'CIKM': 'B',
  'SDM': 'B',
  'ICDT': 'B',
  'ICDM': 'B',
  'ECIR': 'B',
  'EDBT': 'B',
  'CIDR': 'B',
  'DASFAA': 'B',
  
  // A类期刊
  'TKDE': 'A',
  'VLDBJ': 'A',
  'TODS': 'A',
  'TOIS': 'A',
  
  // B类期刊
  'I&M': 'B',
  'EJIS': 'B',
  'IJGIS': 'B',
  'J. Strategic Inf. Sys.': 'B',
  'JASIST': 'B',
  'IPM': 'B',
  'IS': 'B',
  'JWS': 'B',
  'DMKD': 'B',
  'KAIS': 'B',
  'TKDD': 'B',
  'AEI': 'B',
  'IJIS': 'B',
  'TWEB': 'B',
  'DKE': 'B',
  
  // 人工智能与模式识别（Artificial Intelligence and Pattern Recognition）
  // A类会议
  'CVPR': 'A',
  'ICCV': 'A',
  'ICML': 'A',
  'ACL': 'A',
  'ECCV': 'A',
  'COLT': 'A',
  'NeurIPS': 'A',
  'AAAI': 'A',
  'EMNLP': 'A',
  'ICRA': 'A',
  'ICLR': 'A',
  'RSS': 'A',
  
  // B类会议
  'BMVC': 'B',
  'AISTATS': 'B',
  'NAACL': 'B',
  'IJCAI': 'B',
  'AAMAS': 'B',  // International Joint Conference on Autonomous Agents and Multi-agent Systems (会议)
  'ICAPS': 'B',
  'ICB': 'B',
  'GECCO': 'B',
  'ICPR': 'B',
  'FG': 'B',
  'ICDAR': 'B',
  'IROS': 'B',
  'COLING': 'B',
  'IJCNN': 'B',
  'UAI': 'B',
  'ALT': 'B',
  'RecSys': 'B',
  
  // A类期刊
  'TPAMI': 'A',
  'IJCV': 'A',
  'JMLR': 'A',
  'TR': 'A',
  'AI': 'A',
  'TASLP': 'A',
  
  // B类期刊
  'TEC': 'B',
  'TNNLS': 'B',
  'TFS': 'B',
  'PR': 'B',
  'TAC': 'B',
  'JBI': 'B',
  'PRL': 'B',
  'JAIR': 'B',
  'CVIU': 'B',
  'EAAI': 'B',
  'IJAR': 'B',
  'TG': 'B',
  'JSLHR': 'B',
  'TACL': 'B',
  
  // 计算机图形学与多媒体（Computer Graphics and Multimedia）
  // A类会议
  'SIGGRAPH': 'A',
  'IEEE VIS': 'A',
  'ACM MM': 'A',
  'VR': 'A',
  
  // B类会议
  'SPM': 'B',
  'EGSR': 'B',
  'ISMAR': 'B',
  'EG': 'B',
  'SGP': 'B',
  'SCA': 'B',
  'EuroVis': 'B',
  'ICASSP': 'B',
  'ICMR': 'B',
  'ICIP': 'B',
  'SI3D': 'B',
  'PacificVis': 'B',
  'PG': 'B',
  'DCC': 'B',
  
  // A类期刊
  'TIP': 'A',
  'TOG': 'A',
  'TMM': 'A',
  'TVCG': 'A',
  'CAD': 'A',
  
  // B类期刊
  'TCSVT': 'B',
  'SIIMS': 'B',
  'CG': 'B',
  'SPL': 'B',
  'CGF': 'B',
  'Speech Com': 'B',
  'CAGD': 'B',
  
  // 人机交互与普适计算（Human-Computer Interaction and Pervasive Computing）
  // A类会议
  'CSCW': 'A',
  'UbiComp': 'A',
  'UIST': 'A',
  'CHI': 'A',
  
  // B类会议
  'PERCOM': 'B',
  'IUI': 'B',
  'MobileHCI': 'B',
  'DIS': 'B',
  'ICMI': 'B',
  
  // A类期刊
  'IJHCS': 'A',
  'TOCHI': 'A',
  
  // B类期刊
  'UMUAI': 'B',
  'HCI': 'B',
  'PMC': 'B',
  'IJHCI': 'B',
  'BIT': 'B',
  'IWC': 'B',
  
  // 综合与交叉（Interdisciplinary）
  // A类会议
  'RECOMB': 'A',
  'ISMB': 'A',
  'WWW': 'A',  // International World Wide Web Conference (会议)
  'EC': 'A',
  
  // B类会议
  'HSCC': 'B',
  'MICCAI': 'B',
  'BPM': 'B',
  
  // A类期刊
  'JACM': 'A',
  'Proc. IEEE': 'A',
  
  // B类期刊
  'TMI': 'B',
  'TITS': 'B',
  'TGARS': 'B',
  'TASAE': 'B',
  'JAMIA': 'B',
  'JBHI': 'B',
  'TBD': 'B',
  'GRSL': 'B',
  'TCBB': 'B',
  'JCST': 'B'
}

/**
 * 获取会议或期刊的TH-CPL等级
 * @param {string} name - 会议或期刊的缩写名称
 * @returns {string|null} - 返回'A'或'B'，如果不在列表中则返回null
 */
export function getThcplLevel(name) {
  if (!name) return null
  return thcplMapping[name] || null
}
