"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, MapPin } from "lucide-react"

const agendaData = [
  {
    day: 3,
    date: "ថ្ងៃអង្គារ ទី៣ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    matches: [
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទាត់ (កុមារា)",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកបរិបូណ៌", team2: "ស្រុករលាប្អៀរ" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទាត់ (កុមារា)",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកជលគិរី", team2: "ក្រុងកំពង់ឆ្នាំង" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទាត់ (កុមារី)",
        time: "09:20 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់ត្រឡាច", team2: "ស្រុករលាប្អៀរ" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទាត់ (កុមារី)",
        time: "03:20 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់លែង", team2: "ស្រុកទឹកផុស" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទះ (កុមារា)",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ស្រុកជលគិរី", team2: "ស្រុកទឹកផុស" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទះ (កុមារា)",
        time: "03:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ស្រុកកំពង់លែង" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទះ (កុមារី)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកទឹកផុស" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់បោះ (កុមារា)",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់លែង", team2: "ស្រុកបរិបូណ៌" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់បោះ (កុមារី)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់ត្រឡាច", team2: "ស្រុកបរិបូណ៌" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "ប៊ូល និងប៉េតង់ (កុមារា) វិញ្ញាសា៖ ១នាក់ ទល់ ១នាក់",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត (N/A)",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកសាមគ្គីមានជ័យ" },
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកកំពង់ត្រឡាច" },
          { team1: "ស្រុកទឹកផុស", team2: "ស្រុកកំពង់លែង" },
          { team1: "ស្រុកជលគីរី", team2: "ស្រុកបរិបូណ៌" },        ]
      },
             {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទាត់ (យុវជន)",
        time: "02:30 PM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់លែង", team2: "ស្រុកកំពង់ត្រឡាច" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទាត់ (នារី)",
        time: "08:15 AM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់លែង", team2: "ស្រុករលាប្អៀរ" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទាត់ (នារី)",
        time: "09:30 AM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកបរិបូរណ៌", team2: "ស្រុកជលគីរី" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទះ (យុវជន)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត (ទីលាន II)",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកកំពង់ត្រឡាច" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទះ (យុវជន)",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត (ទីលាន II)",
        battles: [
          { team1: "ក្ស្រុកកំពង់លែង", team2: "ស្រុកជលគីរី" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទះ (នារី)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត (ទីលាន I)",
        battles: [
          { team1: "ស្រុកកំពង់លែង", team2: "ស្រុករលាប្អៀរ" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទះ (នារី)",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត (ទីលាន I)",
        battles: [
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ស្រុកបរិបូរណ៌" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់បោះ (យុវជន)",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្តកំពង់ឆ្នាំង",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកសាមគ្គីមានជ័យ" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់បោះ (នារី)",
        time: "09:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្តកំពង់ឆ្នាំង",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកបរិបូរណ៌" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់បោះ (នារី)",
        time: "03:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្តកំពង់ឆ្នាំង",
        battles: [
          { team1: "ស្រុកកំពង់ត្រឡាច", team2: "ស្រុកសាមគ្គីមានជ័យ" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "ប៊ូល និងប៉េតង់ (នារី) វិញ្ញាសា៖ ៣នាក់ ទល់ ៣នាក់",
        time: "08:00 AM",
        location: "N/A",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ក្រុងកំពង់ឆ្នាំង" },
          { team1: "ស្រុកបរិបូរណ៌", team2: "ស្រុកទឹកផុស" },
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ស្រុកកំពង់លែង" },
          { team1: "ស្រុកកំពង់ត្រឡាច", team2: "ស្រុកជលគីរី" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "ប៊ូល និងប៉េតង់ (យុវជន) វិញ្ញាសា៖ ៣នាក់ ទល់ ៣នាក់",
        time: "02:00 PM",
        location: "N/A",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកទឹកផុស" },
          { team1: "ស្រុកបរិបូរណ៌", team2: "ស្រុកកំពង់ត្រឡាច" },
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកកំពង់លែង" },
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ស្រុកជលគីរី" },
        ]
      },
    ]
  },
  {
    day: 4,
    date: "ថ្ងៃពុធ ទី៤ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    matches: [
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទាត់ (កុមារា)",
        time: "09:20 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកទឹកផុស", team2: "ស្រុកកំពង់លែង" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទាត់ (កុមារី)",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ក្រុងកំពង់ឆ្នាំង" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់បោះ (កុមារា)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ក្រុងកំពង់ឆ្នាំង" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "អត្តពលកម្ម (កុមារី)​ វិញ្ញាសា៖ លោតចម្ងាយ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម (កុមារា)​ វិញ្ញាសា៖ លោតចម្ងាយ",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទាត់ (យុវជន)",
        time: "01:30 PM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកសាមគ្គីមានជ័យ" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់បោះ (យុវជន)",
        time: "09:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកបរិបូរណ៌" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ រត់ ៣០០០ម៉ែត្រ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ រត់ ៣០០០ម៉ែត្រ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },

    ]
  },
  {
    day: 5,
    date: "ថ្ងៃព្រហស្បតិ៍ ទី៥ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    matches: [
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទាត់ (កុមារា)",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ស្រុកកំពង់ត្រឡាច" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទាត់ (កុមារី)",
        time: "03:20 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកបរិបូណ៌", team2: "ស្រុកជលគិរី" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទះ (កុមារា)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកកំពង់ត្រឡាច" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់ទះ (កុមារា)",
        time: "09:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ក្រុងកំពង់ឆ្នាំង", team2: "ស្រុកបរិបូណ៌" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទះ (កុមារី)",
        time: "02:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ស្រុកកំេពង់ត្រឡាច", team2: "ស្រុកសាមគ្គីមានជ័យ" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់ទះ (កុមារី)",
        time: "03:00 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត​ (ទីលាន III)",
        battles: [
          { team1: "ស្រុកបរិបូណ៌", team2: "ស្រុករលាប្អៀរ" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "បាល់បោះ (កុមារី)",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ក្រុងកំពង់ឆ្នាំង" },        ]
      },
      {
        type: "kid",
        gender: "boy",
        sport: "បាល់បោះ (កុមារា)",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: [
          { team1: "ស្រុកកំពង់ត្រឡាច", team2: "ក្រុមឈ្នះ" },        ]
      },
      {
        type: "kid",
        gender: "girl",
        sport: "អត្តពលកម្ម (កុមារី)​ វិញ្ញាសា៖ រត់​ ៦០ម៉ែត្រ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម (កុមារា)​ វិញ្ញាសា៖ រត់​ ៦០ម៉ែត្រ",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ ចោលកូនបាល់",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ ចោលដំបងមានកន្ទុយ",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទាត់ (យុវជន)",
        time: "09:30 AM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកជលគីរី" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទាត់ (យុវជន)",
        time: "01:30 PM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកបរិបូរណ៌", team2: "ស្រុកទឹកផុស" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទាត់ (នារី)",
        time: "08:15 AM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកសាមគ្គីមានជ័យ", team2: "ក្រុងកំពង់ឆ្នាំង" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទាត់ (នារី)",
        time: "03:00 PM",
        location: "មុខសាលាខេត្ត",
        battles: [
          { team1: "ស្រុកទឹកផុស", team2: "ស្រុកកំពង់ត្រឡាច" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទះ (យុវជន)",
        time: "08:00 AM",
        location: "កីឡដ្ឋានខេត្ត (ទីលាន II)",
        battles: [
          { team1: "ស្រុកបរិបូរណ៌", team2: "ស្រុកសាមគ្គីមានជ័យ" },
        ]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "បាល់ទះ (យុវជន)",
        time: "02:00 PM",
        location: "កីឡដ្ឋានខេត្ត (ទីលាន II)",
        battles: [
          { team1: "ស្រុករលាប្អៀរ", team2: "ស្រុកទឹកផុស" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទះ (នារី)",
        time: "08:00 AM",
        location: "កីឡដ្ឋានខេត្ត (ទីលាន I)",
        battles: [
          { team1: "ស្រុកជលគីរី", team2: "ស្រុកកំពង់ត្រឡាច" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "បាល់ទាត់ (នារី)",
        time: "02:00 PM",
        location: "កីឡដ្ឋានខេត្ត (ទីលាន I)",
        battles: [
          { team1: "ស្រុកទឹកផុស", team2: "ក្រុងកំពង់ឆ្នាំង" },
        ]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ លោតកម្ពស់",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ លោតកម្ពស់",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ ចោលដុំដែក ៣ គ.ក",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ ចោលដុំដែក ៥ គ.ក",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },

    ]
  },
  {
    day: 6,
    date: "ថ្ងៃសុក្រ ទី៦ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    matches: [
      {
        type: "kid",
        gender: "girl",
        sport: "អត្តពលកម្ម (កុមារី)​ វិញ្ញាសា៖ រត់​ ១០០០ម៉ែត្រ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម (កុមារា)​ វិញ្ញាសា៖ រត់​ ១០០០ម៉ែត្រ",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ រត់ឆ្លងកាត់ឧបសគ្គ (២៥មx២)",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ លោតជើងពីរទៅមុខ",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ រត់ ១០០ម៉ែត្រ",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ រត់ ១០០ម៉ែត្រ",
        time: "04:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },

    ]
  },
  {
    day: 7,
    date: "ថ្ងៃសៅរ៍ ទី៧ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    matches: [
      {
        type: "kid",
        gender: "girl",
        sport: "អត្តពលកម្ម (កុមារី)​ វិញ្ញាសា៖ លោតកម្ពស់",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម (កុមារា)​ វិញ្ញាសា៖ លោតកម្ពស់",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ រត់បណ្ដាក់ (៥០មx៤)",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "kid",
        gender: "boy",
        sport: "អត្តពលកម្ម​ (កុមារ) វិញ្ញាសា៖ (Fomula one)",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles: []
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ ដើរ ៣០០០ម៉ែត្រ",
        time: "08:00 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ ដើរ ៥០០០ម៉ែត្រ",
        time: "08:30 AM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "boy",
        sport: "អត្តពលកម្ម (យុវជន) វិញ្ញាសា៖ លោតចម្ងាយ",
        time: "02:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
      {
        type: "adult",
        gender: "girl",
        sport: "អត្តពលកម្ម (នារី) វិញ្ញាសា៖ លោតចម្ងាយ",
        time: "03:30 PM",
        location: "ពហុកីឡដ្ឋានខេត្ត",
        battles:[]
      },
    ]
  },
]

export function AgendaSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [selectedType, setSelectedType] = useState<"kid" | "adult">("kid")
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="agenda" className="py-16 sm:py-24 bg-muted/30" style={{ fontFamily: "'MiSansKhmer_Semibold'" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4" style={{ fontFamily: "'KhmerOSMoulLight'" }}>
            កាលវិភាគ<span className="text-primary">ប្រកួត</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            កាលវិភាគលម្អិតនៃការប្រកួតកីឡាពីថ្ងៃទី ៣ ដល់ទី ៧
          </p>
        </div>

        {/* Type Switcher */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedType("kid")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === "kid"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
            style={{ fontFamily: "'MiSansKhmer_Semibold'" }}
          >
            កុមារ
          </button>
          <button
            onClick={() => setSelectedType("adult")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === "adult"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
            style={{ fontFamily: "'MiSansKhmer_Semibold'" }}
          >
            យុវជន
          </button>
        </div>

        {/* Days View */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {agendaData.map((dayData, dayIndex) => (
            <div
              key={dayIndex}
              ref={(el) => {
                itemRefs.current[dayIndex] = el
              }}
              data-index={dayIndex}
              className={`bg-card rounded-xl shadow-lg border border-border overflow-hidden ${
                visibleItems.has(dayIndex) ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${dayIndex * 100}ms` }}
            >
              {/* Day Header */}
              <div className="bg-primary/10 border-b border-border p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  {dayData.date}
                </h3>
              </div>

              {/* Matches for selected type */}
              <div className="divide-y divide-border">
                {dayData.matches
                  .filter((match) => match.type === selectedType)
                  .map((match, matchIndex) => (
                    <div key={matchIndex} className="p-4 sm:p-6 hover:bg-muted/30 transition-colors">
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg sm:text-xl font-bold text-foreground" style={{ fontFamily: "'MiSansKhmer_Semibold'" }}>
                            {match.sport}
                          </h4>
                          <div className="flex gap-4 mt-2 sm:mt-0 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                              {match.time}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                              {match.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Battles */}
                      <div className="space-y-2">
                        {match.battles.map((battle, battleIndex) => (
                          <div
                            key={battleIndex}
                            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                          >
                            <span className="font-medium text-foreground">{battle.team1}</span>
                            <span className="text-muted-foreground text-sm">Vs</span>
                            <span className="font-medium text-foreground">{battle.team2}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* No matches message */}
              {dayData.matches.filter((match) => match.type === selectedType).length === 0 && (
                <div className="p-6 text-center text-muted-foreground">
                  គ្មានការប្រកួតក្នុងថ្ងៃនេះ
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
