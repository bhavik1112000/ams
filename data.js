// interface Asset {
//   id: string;
//   user: string;
//   location: string;
//   desk: string;
//   serialNo: string;
//   category: string;
//   brand: string;
//   model: string;
//   otherConfig: { [key: string]: string }; // Dynamic object for otherConfig
//   IPAddress?: string;
//   MACId?: string;
//   historyLog: {
//     maintenanceLog: Array<{
//       status: string;
//       issue: string;
//     }>;
//     userHistory: Array<{
//       user: string;
//       location: string;
//       desk: string;
//       from: string | Date;
//       to: string | Date;
//     }>;
//   };
// }

export const assets = [
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    serialNo: "cpu001",
    category: "cpu",
    status: "In use",
    brand: "Samsung",
    model: "x1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "17-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "01-11-2024",
        },
      ],
    },
  },
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    serialNo: "moniter001",
    category: "monitor",
    status: "In use",

    brand: "Samsung",
    model: "p1",
    otherConfig: {
      resolution: "1080p",
    },
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "01-11-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    serialNo: "kb001",
    brand: "Logitech",
    category: "keyboard",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "19-03-2024",
        },
        {
          status: "Fixed",
          issue: "Some keys not working",
          date: "14-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "31-10-2024",
          to: "",
        },
      ],
    },
  },
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    serialNo: "mouse001",
    brand: "Logitech",
    category: "mouse",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-04-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    serialNo: "hp001",
    brand: "Philips",
    category: "headphone",
    status: "In use",

    model: "v1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },

  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    serialNo: "cpu002",
    category: "cpu",
    status: "In use",

    brand: "Samsung",
    model: "x1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "10-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "01-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    serialNo: "moniter002",
    category: "monitor",
    status: "In use",

    brand: "Samsung",
    model: "p1",
    otherConfig: {
      resolution: "1080p",
    },
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdownnn issue",
          date: "01-00-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    serialNo: "kb002",
    brand: "Logitech",
    category: "keyboard",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Some keys not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    serialNo: "mouse002",
    brand: "Logitech",
    category: "mouse",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    serialNo: "hp002",
    brand: "Philips",
    category: "headphone",
    status: "In use",

    model: "v1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },

  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    serialNo: "cpu003",
    category: "cpu",
    status: "In use",

    brand: "Samsung",
    model: "x1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "19-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    serialNo: "monitor003",
    category: "monitor",
    brand: "Samsung",
    status: "In use",

    model: "p1",
    otherConfig: {
      resolution: "1080p",
    },
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "17-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    serialNo: "kb003",
    brand: "Logitech",
    category: "keyboard",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Some keys not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    serialNo: "mouse003",
    brand: "Logitech",
    category: "mouse",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    serialNo: "hp003",
    brand: "Philips",
    category: "headphone",
    status: "In use",

    model: "v1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "004",
    user: "Tracy",
    location: "Gamma",
    desk: "002",
    serialNo: "cpu004",
    category: "cpu",
    status: "In use",

    brand: "Samsung",
    model: "x1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-08-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "12-09-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "004",
    user: "Tracy",
    location: "Gamma",
    desk: "002",
    serialNo: "monitor004",
    category: "monitor",
    brand: "Samsung",
    status: "In use",

    model: "p1",
    otherConfig: {
      resolution: "1080p",
    },
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "19-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "004",
    user: "Tracy",
    location: "Gamma",
    desk: "002",
    serialNo: "kb004",
    brand: "Logitech",
    category: "keyboard",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "18-03-2024",
        },
        {
          status: "Fixed",
          issue: "Some keys not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "004",
    user: "Tracy",
    location: "Gamma",
    desk: "002",
    serialNo: "mouse004",
    brand: "Logitech",
    category: "mouse",
    status: "In use",

    model: "c1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Tracy",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
      ],
    },
  },
  {
    id: "004",
    user: "Tracy",
    location: "Gamma",
    desk: "002",
    serialNo: "hp004",
    brand: "Philips",
    category: "headphone",
    status: "In use",

    model: "v1",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Not working",
          date: "12-03-2024",
        },
      ],
      userHistory: [
        {
          user: "Alex",
          location: "Beta",
          desk: "006",
          from: "10-10-2022",
          to: "12-12-2023",
        },
        // {
        //   id: "004",
        //   user: "Tracy",
        //   location: "Gamma",
        //   desk: "002",
        //   serialNo: "monitor004",
        //   category: "monitor",
        //   brand: "Samsung",
        //   status: "In use",

        //   model: "p1",
        //   otherConfig: {
        //     resolution: "1080p",
        //   },
        //   historyLog: {
        //     maintenanceLog: [
        //       {
        //         status: "in-repair",
        //         issue: "Slowdown issue",
        //         date: "12-03-2024",
        //       },
        //       {
        //         status: "Fixed",
        //         issue: "Heating issue",
        //         date: "19-03-2024",
        //       },
        //     ],
        //     userHistory: [
        //       {
        //         user: "Alex",
        //         location: "Beta",
        //         desk: "006",
        //         from: "10-10-2022",
        //         to: "12-12-2023",
        //       },
        //     ],
        //   },
        // },
      ],
    },
  },
  {
    id: "",
    user: "",
    location: "",
    desk: "",
    serialNo: "monitor005",
    category: "monitor",
    brand: "Samsung",
    status: "available",

    model: "p1",
    otherConfig: {
      resolution: "1080p",
    },
    historyLog: {
      maintenanceLog: [],
      userHistory: [],
    },
  },
  {
    id: "",
    user: "",
    location: "",
    desk: "",
    serialNo: "cpu005",
    category: "cpu",
    brand: "Samsung",
    status: "available",

    model: "p1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [],
      userHistory: [],
    },
  },
  {
    id: "",
    user: "",
    location: "",
    desk: "",
    serialNo: "cpu006",
    category: "cpu",
    brand: "Samsung",
    status: "in repair",

    model: "p1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "19-03-2024",
        },
      ],
      userHistory: [],
    },
  },
  {
    id: "",
    user: "",
    location: "",
    desk: "",
    serialNo: "cpu007",
    category: "cpu",
    brand: "Samsung",
    status: "in repair",

    model: "p1",
    otherConfig: {
      processor: "Intel i9",
      ram: "16 GB",
      storage: "1 TB",
    },
    IPAddress: "123456789",
    MACId: "123456789",
    historyLog: {
      maintenanceLog: [
        {
          status: "in-repair",
          issue: "Slowdown issue",
          date: "12-03-2024",
        },
        {
          status: "Fixed",
          issue: "Heating issue",
          date: "19-03-2024",
        },
      ],
      userHistory: [],
    },
  },
];

export const data = [
  {
    id: "001",
    user: "Alex",
    location: "Alpha",
    desk: "001",
    assets: [
      {
        serialNo: "001",
        category: "cpu",
        brand: "Samsung",
        model: "x1",
        otherConfig: {
          processor: "Intel i9",
          ram: "16 GB",
          storage: "1 TB",
        },
        IPAddress: "123456789",
        MACId: "123456789",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: "10 - 10 - 2022",
              to: "12 - 12 - 2023",
            },
          ],
        },
      },
      {
        serialNo: "001",
        category: "monitor",
        brand: "Samsung",
        model: "p1",
        otherConfig: {
          resolution: "1080p",
        },
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "keyboard",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
            {
              status: "Fixed",
              issue: "Some keys not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "mouse",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Philips",
        category: "headphone",
        model: "v1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
    ],
  },
  {
    id: "002",
    user: "Travis",
    location: "Beta",
    desk: "001",
    assets: [
      {
        serialNo: "001",
        category: "cpu",
        brand: "Samsung",
        model: "x1",
        otherConfig: {
          processor: "Intel i9",
          ram: "16 GB",
          storage: "1 TB",
        },
        IPAddress: "123456789",
        MACId: "123456789",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        category: "monitor",
        brand: "Samsung",
        model: "p1",
        otherConfig: {
          resolution: "1080p",
        },
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "keyboard",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
            {
              status: "Fixed",
              issue: "Some keys not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "mouse",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Philips",
        category: "headphone",
        model: "v1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
    ],
  },
  {
    id: "003",
    user: "Kevin",
    location: "Gamma",
    desk: "001",
    assets: [
      {
        serialNo: "001",
        category: "cpu",
        brand: "Samsung",
        model: "x1",
        otherConfig: {
          processor: "Intel i9",
          ram: "16 GB",
          storage: "1 TB",
        },
        IPAddress: "123456789",
        MACId: "123456789",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        category: "monitor",
        brand: "Samsung",
        model: "p1",
        otherConfig: {
          resolution: "1080p",
        },
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Slowdown issue",
            },
            {
              status: "Fixed",
              issue: "Heating issue",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "keyboard",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
            {
              status: "Fixed",
              issue: "Some keys not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Logitech",
        category: "mouse",
        model: "c1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
      {
        serialNo: "001",
        brand: "Philips",
        category: "headphone",
        model: "v1",
        historyLog: {
          maintenanceLog: [
            {
              status: "in-repair",
              issue: "Not working",
            },
          ],
          userHistory: [
            {
              user: "Alex",
              location: "Beta",
              desk: "006",
              from: 10 - 10 - 2022,
              to: 12 - 12 - 2023,
            },
          ],
        },
      },
    ],
  },
];

export const assetRecord = [
  {
    category: "cpu",
    available: 20,
    inUse: 50,
    inRepair: 5,
    scrap: 4,
  },
  {
    category: "monitor",
    available: 20,
    inUse: 50,
    inRepair: 5,
    scrap: 4,
  },
  {
    category: "keyboard",
    available: 20,
    inUse: 50,
    inRepair: 5,
    scrap: 4,
  },
  {
    category: "mouse",
    available: 20,
    inUse: 50,
    inRepair: 5,
    scrap: 4,
  },
  {
    category: "headphone",
    available: 20,
    inUse: 50,
    inRepair: 5,
    scrap: 4,
  },
];
// id
// 2. user
// 3. desk
// 4. location
// 5. cpu:{
// 		serialNo,
// 		brand,
// 		model,
// 		otherConfig,
//         IPAddress,
//         MACId
// 		historyLog : {
//             maintenanceLog: [
//                 {
//                     status,
//                     issue
//                 }
//                 ],
//             user-history: [
//                 {
//                     user,
//                     desk
//                 }
//             ]
//         }
// 	   }
// 6. monitor:{
// 		   serialNo,
// 		   brand,
// 		   model,
// 		   otherConfig,
// 		   historyLog : {
//                 maintenanceLog: [
//                     {
//                         status,
//                         issue
//                     }
//                     ],
//                 user-history: [
//                     {
//                         user,
//                         desk
//                     }
//                 ]
//         }
// 	      }
// 7. keyboard: {
//                 serialNo,
//                 brand,
//                 model,
//                 otherConfig,
//                 historyLog : {
//                     maintenanceLog: [
//                         {
//                             status,
//                             issue
//                         }
//                         ],
//                     user-history: [
//                         {
//                             user,
//                             desk
//                         }
//                     ]
//         }
// 	        }
// 8. mouse:  {
// 		   serialNo,
// 		   brand,
// 		   model,
// 		   otherConfig,
// 		   historyLog : {
//                 maintenanceLog: [
//                     {
//                         status,
//                         issue
//                     }
//                     ],
//                 user-history: [
//                     {
//                         user,
//                         desk
//                     }
//                 ]
//         }
// 	      }
// 9. headphone: {
//                 serialNo,
// 		        brand,
// 		        model,
// 		        otherConfig,
// 		        historyLog : {
//                     maintenanceLog: [
//                         {
//                             status,
//                             issue
//                         }
//                         ],
//                     user-history: [
//                         {
//                             user,
//                             desk
//                         }
//                     ]
//         }
//               }
