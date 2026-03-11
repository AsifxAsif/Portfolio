const projectsData = [
    {
        id: 1,
        title: "Nexus E-commerce Platform",
        category: "Web Development",
        categories: ["web", "testing"],
        date: "Spring 2024",
        team: "Group Project",
        description: "Hybrid e-commerce platform with comprehensive testing suite. Features include user authentication, product catalog, cart management, and wishlist. Implemented with 100% test coverage using JUnit and Selenium for end-to-end testing.",
        tech: ["Java", "Spring Boot", "JUnit", "Selenium", "REST API", "Docker"],
        features: [
            "Comprehensive testing (300+ tests, 100% pass rate)",
            "Hybrid console/web interface",
            "RESTful API with Spring Boot",
            "Docker containerization",
            "Cloud deployment on Render"
        ],
        stats: {
            tests: "300+",
            passRate: "100%",
            modules: "6"
        },
        images: [
            {
                url: "./assets/images/nexus-products.webp",
                caption: "Product Catalog"
            },
            {
                url: "./assets/images/nexus-dashboard.webp",
                caption: "Nexus Dashboard"
            },
            {
                url: "./assets/images/nexus-testing.webp",
                caption: "Testing Suite Results"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Nexus_backend",
            liveDemo: "https://nexus-ecommerce-3nk0.onrender.com",
            documentation: "./assets/document/nexus-documentation.pdf"
        },
        details: {
            overview: "Nexus is a hybrid e-commerce application designed to operate as both a Console-based application (for local logic testing) and a robust RESTful Web API (for production). Built using Spring Boot (Java 21) for the backend and HTML/Tailwind CSS/JavaScript for the frontend, it provides a seamless shopping experience.",
            problem: "Need for a comprehensive e-commerce platform with thorough testing to ensure reliability and performance.",
            solution: "Developed a full-featured e-commerce platform with complete testing suite including unit tests, integration tests, and end-to-end Selenium tests.",
            technologies: ["Java 21", "Spring Boot", "JUnit 5", "Selenium WebDriver", "Docker", "Render Cloud"],
            testing: {
                strategy: "Comprehensive test strategy including unit testing, integration testing, and end-to-end testing",
                coverage: "~90% code coverage across all packages",
                tests: "25 test classes with ~300+ test methods",
                results: "100% pass rate with 0 failed tests"
            },
            deployment: {
                backend: "Render Web Service with Docker (OpenJDK 21)",
                frontend: "https://github.com/AsifxAsif/Nexus_frontend",
                live: "https://nexus-ecommerce-3nk0.onrender.com"
            },
            challenges: [
                "Implementing comprehensive testing suite",
                "Hybrid console/web architecture",
                "Cloud deployment configuration"
            ],
            achievements: [
                "100% test pass rate",
                "Complete CI/CD pipeline",
                "Production-ready deployment"
            ]
        }
    },
    {
        id: 2,
        title: "Lost & Found Android App",
        category: "Mobile Development",
        categories: ["mobile"],
        date: "Spring 2025",
        team: "Team: 3",
        description: "Mobile application for reporting and recovering lost items within a community. Features include Firebase authentication, real-time post updates, category filtering, and user profile management.",
        tech: ["Android", "XML", "Java", "Firebase", "Firestore", "Authentication"],
        features: [
            "Firebase Authentication & Firestore",
            "Real-time post updates",
            "Category-based filtering",
            "User profile management",
            "Image upload to Firebase Storage"
        ],
        stats: {
            team: "3",
            modules: "5",
            functional: "100%"
        },
        images: [
            {
                url: "./assets/images/lost-found-home.webp",
                caption: "Home Screen"
            },
            {
                url: "./assets/images/lost-found-posts.webp",
                caption: "Posts Listing"
            },
            {
                url: "./assets/images/lost-found-profile.webp",
                caption: "User Profile"
            }
        ],
        links: {
            sourceCode: "https://github.com/Nayma-Amin/Lost-and-Found",
            liveDemo: null,
            documentation: "./assets/document/lost-found-documentation.pdf"
        },
        details: {
            overview: "The Lost and Found Android App is a mobile platform developed using Java in Android Studio, aimed at helping users report and recover lost or found items. Integrated with Firebase Authentication, Firestore, and Storage.",
            problem: "Losing personal belongings has become common, and retrieving them is challenging due to lack of proper reporting systems.",
            solution: "Centralized platform where users can report lost/found items, view all posted items, and contact relevant users to reclaim or return items.",
            technologies: ["Android Studio", "Java", "XML", "Firebase Auth", "Firestore", "Firebase Storage"],
            features: {
                authentication: "Firebase Authentication for Email/Password and Google Sign-In",
                profile: "User profile section with edit/update capabilities",
                posts: "Create, view, edit, and delete lost/found item posts",
                filtering: "Category and location-based filtering",
                ui: "Tabbed view for All Posts, Lost Items, and Found Items"
            },
            challenges: [
                "Firebase Authentication session management",
                "Dependency management conflicts",
                "Asynchronous data handling",
                "Image upload optimization",
                "UI consistency across devices"
            ],
            businessModel: [
                "Freemium Model with advanced features",
                "In-App Advertising via Google AdMob",
                "Partnerships with institutions",
                "Local business promotions"
            ]
        }
    },
    {
        id: 3,
        title: "Leaf Disease Classification",
        category: "AI/ML",
        categories: ["ai"],
        date: "2024",
        team: "Team: 5",
        description: "Deep learning framework for classifying Hog Plum leaf diseases using ConvNeXt, ResNeXt, DenseNet, and NASNet-Large models. Achieved 96.74% accuracy with comprehensive evaluation metrics.",
        tech: ["Python", "TensorFlow", "ConvNeXt", "Deep Learning", "Computer Vision", "Grad-CAM"],
        features: [
            "6 deep learning models tested",
            "96.74% accuracy with NASNet-Large",
            "Data augmentation techniques",
            "Grad-CAM visualization",
            "Comprehensive performance metrics"
        ],
        stats: {
            accuracy: "96.74%",
            models: "6",
            images: "3782"
        },
        images: [
            {
                url: "./assets/images/leaf-disease-samples.webp",
                caption: "Leaf Disease Samples"
            },
            {
                url: "./assets/images/leaf-disease-gradcam.webp",
                caption: "Grad-CAM Visualization"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Hog_plum_disease",
            liveDemo: null,
            documentation: "./assets/document/leaf-disease-paper.pdf"
        },
        details: {
            overview: "A deep learning framework for classifying Hog Plum leaf diseases with high accuracy. The system uses multiple modern architectures and provides interpretability through Grad-CAM visualizations.",
            methodology: "Data preprocessing → Augmentation → Feature selection → Model training → Evaluation → Visualization",
            dataset: {
                total: "3782 images",
                healthy: "2829 images",
                notHealthy: "953 images",
                augmented: "5657 images after augmentation"
            },
            models: [
                "ConvNeXt - 95.95% accuracy",
                "RegNet - 95.24% accuracy",
                "ResNeXt-50 - 95.68% accuracy",
                "DenseNet-201 - 95.51% accuracy",
                "EfficientNetV2-S - 95.51% accuracy",
                "NASNet-Large - 96.74% accuracy"
            ],
            evaluation: {
                metrics: ["Accuracy", "Precision", "Recall", "F1-score", "AUC", "Confusion Matrix"],
                bestModel: "NASNet-Large with 96.74% accuracy, 96.80% precision, 96.74% recall, 96.76% F1-score",
                visualization: "Grad-CAM for model interpretability"
            },
            results: "The framework demonstrates effectiveness for real-world agricultural applications in disease detection with high accuracy and interpretability."
        }
    },
    {
        id: 4,
        title: "Smart Energy Monitoring",
        category: "IoT System",
        categories: ["system"],
        date: "2024",
        team: "Solo Project",
        description: "IoT system for tracking electricity usage and calculating costs using Tuya smart devices. Features real-time data collection, MySQL database integration, CSV export, and energy calculation algorithms.",
        tech: ["Python", "Flask", "MySQL", "Tuya API", "IoT", "Data Visualization"],
        features: [
            "Real-time energy monitoring",
            "MySQL database integration",
            "CSV data export functionality",
            "Cost calculation algorithms",
            "Tuya smart device integration"
        ],
        stats: {
            real: "Time",
            database: "MySQL",
            integration: "IoT"
        },
        images: [
            {
                url: "./assets/images/energy-dashboard.webp",
                caption: "Energy Monitoring Dashboard"
            },
            {
                url: "./assets/images/energy-graphs.webp",
                caption: "Usage Graphs"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Smart-Energy-Monitoring",
            liveDemo: "https://asifuzzaman.pythonanywhere.com/",
            documentation: "./assets/document/energy-monitoring-documentation.pdf"
        },
        details: {
            overview: "Energy monitoring system that connects to Tuya smart devices to track electricity usage in real-time, calculate costs, and provide data analytics.",
            architecture: {
                backend: "Python Flask server",
                database: "MySQL on PythonAnywhere",
                iot: "Tuya smart devices via Tuya Cloud API",
                frontend: "HTML/CSS/JavaScript dashboard"
            },
            features: {
                monitoring: "Real-time current, voltage, and wattage tracking",
                database: "Persistent storage of energy data",
                export: "CSV export with date range filtering",
                calculation: "Energy consumption and cost calculation",
                api: "REST API endpoints for data access"
            },
            configuration: {
                region: "EU",
                apiKey: "jpemtvy**********ywj",
                apiSecret: "bbe0b8e88********************e03",
                deviceId: "bf2ea6423*********0lt"
            },
            deployment: {
                host: "https://www.pythonanywhere.com/",
                database: "Asifuzzaman$default",
                live: "https://asifuzzaman.pythonanywhere.com/"
            }
        }
    },
    {
        id: 5,
        title: "Campus Network Design",
        category: "Networking",
        categories: ["network"],
        date: "Jan 2025",
        team: "Group Project",
        description: "Designed and simulated a secure university campus network using Cisco Packet Tracer. Implemented VLAN segmentation, OSPF routing, DHCP, and access control lists for enhanced security and efficiency.",
        tech: ["Cisco", "Networking", "VLAN", "OSPF", "DHCP", "Security"],
        features: [
            "VLAN segmentation for departments",
            "OSPF dynamic routing protocol",
            "DHCP for automatic IP allocation",
            "Access control lists (ACLs)",
            "Comprehensive network simulation"
        ],
        stats: {
            departments: "4",
            segmentation: "VLAN",
            design: "Secure"
        },
        images: [
            {
                url: "./assets/images/network-topology.webp",
                caption: "Network Topology Diagram"
            },
            {
                url: "./assets/images/simulation-panel.webp",
                caption: "Simulation Panel"
            },
            {
                url: "./assets/images/pc-pc-ping.webp",
                caption: "PC to PC Ping"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Campus-Network-Design",
            liveDemo: null,
            documentation: "./assets/document/network-design-documentation.pdf"
        },
        details: {
            overview: "Enhanced University Network using Cisco Packet Tracer with dynamic IP allocation, VLAN segmentation, and robust routing protocols.",
            objectives: [
                "Design secure and scalable network for university campus",
                "Simulate network using Cisco Packet Tracer",
                "Integrate dynamic IP addressing and VLAN segmentation"
            ],
            components: [
                "Cisco 2911 Routers",
                "Layer 3 Switches",
                "VLAN-enabled Layer 2 Switches",
                "Dynamic Host Configuration Protocol (DHCP) servers"
            ],
            departments: [
                "Electrical Engineering",
                "Computer Science",
                "Mathematics",
                "Admissions Office"
            ],
            protocols: [
                "OSPF for dynamic routing",
                "DHCP for automatic IP allocation",
                "ACLs for enhanced security"
            ],
            simulation: {
                tool: "Cisco Packet Tracer",
                testing: "Ping command for accessibility testing",
                performance: "Optimal latency and packet delivery"
            },
            security: "VLAN segmentation, access control lists, port security measures"
        }
    },
    {
        id: 6,
        title: "Restaurant Management System",
        category: "Database System",
        categories: ["web", "system"],
        date: "Spring 2024",
        team: "Team: 5",
        description: "Full-featured restaurant management system built with Oracle APEX. Includes customer management, menu system, order processing, reservation system, and comprehensive reporting with multi-table queries.",
        tech: ["Oracle", "APEX", "SQL", "Database", "PL/SQL", "Reports"],
        features: [
            "Customer management with triggers",
            "Menu and order processing system",
            "Reservation management",
            "Multi-table aggregate queries",
            "User role-based authentication"
        ],
        stats: {
            team: "5",
            modules: "6",
            platform: "Oracle APEX"
        },
        links: {
            sourceCode: "https://github.com/yourusername/restaurant-management",
            liveDemo: "https://apex.oracle.com/yourworkspace/restaurant",
            documentation: "./assets/document/restaurant-management-documentation.pdf"
        },
        details: {
            overview: "Complete restaurant management system developed using Oracle Application Express (APEX) with comprehensive database design and reporting capabilities.",
            projectId: "128755",
            workspace: "ahanaf",
            authentication: "Custom authentication system",
            users: [
                "Admin: Asif (asif12)",
                "Admin: Ahanaf (ahanaf12)",
                "Admin: Nawal (nawal12)",
                "Viewer: Dracula (dracula12)",
                "Viewer: Rayhan (rayhan12)"
            ],
            features: {
                reports: "Restaurant table list, Menu list, Order list, Employee list, Reservation list, Customer list",
                forms: "Customer form, Menu form, Order form, Reservation form, Restaurant form, Employee form, User form",
                queries: "Multi-table and aggregate queries for reporting",
                trigger: "Customer form trigger to assign random value to customer points"
            },
            database: {
                tables: ["Usera", "Menu", "Order", "Reservation", "Restaurant_table", "Employee", "Customer"],
                relationships: "Properly normalized with foreign key constraints",
                queries: "Complex SQL queries with joins and aggregations"
            },
            deployment: "Oracle APEX cloud platform with custom authentication and role-based access control"
        }
    },
    {
        id: 7,
        title: "DropNova File Management",
        category: "Web Development",
        categories: ["web"],
        date: "2024",
        team: "Group Project",
        description: "File Management System with advanced features including multi-language support, collaborative file sharing, data analytics, file encryption, and admin panel for management.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
        features: [
            "Multi-language support (English/Bengali)",
            "Admin panel for user management",
            "Collaborative file sharing with permissions",
            "Data analytics and insights",
            "Secure file storage and encryption"
        ],
        stats: {
            features: "5",
            languages: "2",
            security: "High"
        },
        images: [
            {
                url: "./assets/images/dropnova-dashboard.webp",
                caption: "File Manager Dashboard"
            },
            {
                url: "./assets/images/dropnova-sharing.webp",
                caption: "File Sharing Interface"
            },
            {
                url: "./assets/images/dropnova-analytics.webp",
                caption: "Analytics Dashboard"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/CSE412_Group2",
            liveDemo: "https://asifxasif.github.io/CSE412_Group2/",
            documentation: "./assets/document/dropnova-documentation.pdf"
        },
        details: {
            overview: "DropNova is a comprehensive file management system that allows users to upload, organize, share, and manage files securely with advanced features.",
            technologies: {
                frontend: "HTML/CSS/JavaScript",
                backend: "PHP",
                database: "MySQL",
                tools: "Git, GitHub, VS Code, XAMPP/WAMP"
            },
            features: {
                multilingual: "Support for English and Bengali languages",
                admin: "Admin panel for managing users, files, and monitoring activity",
                collaboration: "File/folder sharing with permissions (view/edit/delete)",
                analytics: "Insights into uploaded files (downloads, uploads, interactions)",
                security: "Encrypted file storage and password protection"
            },
            outcomes: [
                "User-friendly experience through multi-language support",
                "Enhanced collaboration through secure file sharing",
                "User insights through data analytics",
                "Improved security with encrypted storage",
                "Efficient system management through admin panel"
            ]
        }
    },
    {
        id: 8,
        title: "Edmond Karp Algorithm",
        category: "Algorithms",
        categories: ["system"],
        date: "June 2024",
        team: "Individual Project",
        description: "Implementation of the Edmonds-Karp algorithm for computing maximum flow in flow networks. Includes theoretical foundations, algorithm steps, Java implementation, and real-world applications analysis.",
        tech: ["Java", "Algorithms", "Graph Theory", "BFS", "Network Flow"],
        features: [
            "Edmonds-Karp algorithm implementation",
            "BFS for shortest augmenting paths",
            "Time complexity analysis O(VE²)",
            "Graphical representation of flow",
            "Real-world applications analysis"
        ],
        stats: {
            complexity: "O(VE²)",
            implementation: "Java",
            applications: "6+"
        },
        images: [
            {
                url: "./assets/images/edmond-karp-graph.webp",
                caption: "Flow Network Visualization"
            },
            {
                url: "./assets/images/edmond-karp-residual.webp",
                caption: "Residual Graph"
            },
            {
                url: "./assets/images/edmond-karp-output.webp",
                caption: "Algorithm Output"
            }
        ],
        links: {
            sourceCode: "https://github.com/yourusername/edmond-karp-algorithm",
            liveDemo: null,
            documentation: "./assets/document/edmond-karp-documentation.pdf"
        },
        details: {
            overview: "The Edmonds-Karp algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network, using BFS to find shortest augmenting paths.",
            algorithm: {
                steps: [
                    "Initialize flow to zero",
                    "Find augmenting path using BFS",
                    "Augment flow along the path",
                    "Repeat until no augmenting path exists"
                ],
                complexity: "O(VE²) where V = vertices, E = edges",
                advantage: "Polynomial time complexity, simplicity, general applicability"
            },
            implementation: {
                language: "Java",
                features: ["BFS for path finding", "Residual graph management", "Flow augmentation"],
                output: "Maximum flow value calculation"
            },
            applications: [
                "Network Design: Maximum data transfer capacity",
                "Image Segmentation: Graph-based segmentation",
                "Airline Scheduling: Flight routing optimization",
                "Traffic Routing: Vehicle flow management",
                "Water Distribution: Resource flow optimization",
                "Power Grid Management: Electricity flow balancing"
            ],
            limitations: [
                "High complexity for dense graphs",
                "Memory intensive for large networks",
                "Not suitable for real-time applications"
            ]
        }
    },
    {
        id: 9,
        title: "XTry: Visual Try-On App",
        category: "Mobile AR",
        categories: ["mobile", "ai"],
        date: "2025",
        team: "Team: 4",
        description: "AR-based visual try-on application for fashion accessories including glasses, jewelry, watches, and rings. Features hybrid architecture combining native Android capabilities with WebAR for real-time virtual try-on experiences.",
        tech: ["Android", "Java", "WebAR", "Firebase", "HTML/CSS/JS", "WebView"],
        features: [
            "Real-time AR try-on for glasses, jewelry, watches, and rings",
            "Hybrid three-layer architecture (Native container, Bridge, Web layer)",
            "Firebase authentication with email verification",
            "Contextual camera permission management",
            "Responsive UI with bottom navigation and side menu"
        ],
        stats: {
            team: "4",
            accuracy: "98%",
            categories: "4"
        },
        images: [
            {
                url: "./assets/images/xtry-login.webp",
                caption: "Login Page"
            },
            {
                url: "./assets/images/xtry-home.webp",
                caption: "Home Screen"
            },
            {
                url: "./assets/images/xtry-tryon.webp",
                caption: "AR Try-On Experience"
            },
            {
                url: "./assets/images/xtry-products.webp",
                caption: "Product Categories"
            },
            {
                url: "./assets/images/xtry-profile.webp",
                caption: "User Profile"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/XTry-Visual-TryOn",
            liveDemo: null,
            documentation: "./assets/document/xtry-capstone-documentation.pdf"
        },
        details: {
            overview: "XTry is a visual try-on application that uses Augmented Reality to enhance the online shopping experience for fashion accessories. It combines native Android capabilities with WebAR technology to provide real-time virtual try-on for glasses, jewelry, watches, and rings.",
            problem: "Online shoppers face high return rates (~30%) due to inability to physically try accessories before purchase. Existing solutions either lack interactivity (static overlays) or require separate app downloads.",
            solution: "A hybrid AR solution that provides real-time, interactive virtual try-on directly within the shopping flow, using three-layer architecture for optimal performance and user experience.",
            team: [
                "Anika Nawal (2021-3-60-161)",
                "Md. Asifuzzaman (2021-3-60-167)",
                "Sudipta Roy (2021-2-60-009)",
                "Md Rayhan Al Islam (2019-1-60-265)"
            ],
            supervisor: "Md Al-Imran, Senior Lecturer, Department of Computer Science & Engineering, East West University",
            technologies: {
                native: ["Android Studio", "Java", "Firebase Authentication", "SharedPreferences"],
                web: ["HTML5", "CSS3", "JavaScript", "WebAR Studio", "WebXR Device API"],
                architecture: ["Three-layer hybrid architecture", "WebView configuration", "JavaScriptInterface bridge"]
            },
            architecture: {
                nativeContainer: "Manages Android lifecycle, runtime permissions (CAMERA, STORAGE), WebView configuration, hardware acceleration",
                bridgeLayer: "Bidirectional communication between native and web layers, permission status propagation, security validation",
                webLayer: "SPA implementation, UI management, product catalog, WebAR integration via iframe"
            },
            performance: {
                highEnd: "App Launch: 1.2s, AR Load: 2.1s, Memory: 142MB, Frame Rate: 58fps",
                midRange: "App Launch: 1.8s, AR Load: 3.2s, Memory: 156MB, Frame Rate: 42fps",
                entryLevel: "App Launch: 3.1s, AR Load: 6.8s, Memory: 175MB, Frame Rate: 24fps",
                successRate: "98% on high-end, 92% on mid-range, 76% on entry-level devices"
            },
            features: {
                authentication: "Firebase email/password authentication with email verification and Remember Me functionality",
                arIntegration: "WebAR via WebView with contextual camera permission requests",
                productCategories: ["Glasses", "Jewelry (necklaces, rings, earrings)", "Watches"],
                navigation: "Bottom navigation tabs, side drawer menu, category-based filtering",
                ui: "Consistent theming, responsive layouts, vector icons, touch-optimized targets"
            },
            security: {
                measures: [
                    "Input validation on all forms",
                    "Firebase security rules for data access",
                    "Secure SharedPreferences storage",
                    "Origin validation for bridge communications",
                    "HTTPS enforcement for external resources"
                ],
                permissions: "Contextual camera permission requests with clear user rationale"
            },
            limitations: [
                "AR quality dependent on device capabilities",
                "Internet connection required for try-on feature",
                "No real payment integration",
                "Limited product categories (4)",
                "No wishlist/favorites functionality",
                "No multi-product try-on"
            ],
            futureWork: [
                "Implement native AR using ARCore/ARKit for better performance",
                "Face/ear measurement for accurate sizing",
                "Multi-product try-on (necklace + earrings together)",
                "Integration with e-commerce APIs",
                "Social media sharing of try-on results",
                "Video recording of AR sessions",
                "Product reviews and user photos"
            ],
            achievements: [
                "Seamless AR integration without app interruption",
                "Contextual permission management with 92% user approval",
                "Scalable architecture supporting new product categories",
                "98% successful AR completion rate on high-end devices",
                "Enhanced user confidence in online purchase decisions"
            ]
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData };
}