import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Monitoring and Data Collection',
    description:
      'EMS tracks energy consumption patterns, identifies trends, and compares actual usage against set targets.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Analysis and Optimization',
    description:
      'EMS uses algorithms to optimize energy consumption based on real-time conditions, load demands, and energy prices.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: ' Control and Automation',
    description: 'EMS allows for control over energy usage, minimizing waste and maximizing efficiency needed.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Reporting and Visualization',
    description:
      'EMS provides detailed reports and visualizations of energy consumption, cost savings, and environmental impact.',
    icon: <ContactSupportIcon />,
  },
]
