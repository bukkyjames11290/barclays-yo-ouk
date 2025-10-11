import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Donna Mary',
      email: 'd*@gmail.com',
      dateCreated: '9/2/2025', // m/d/y
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 130000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'December 7, 2022',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'George Atkinson',
      email: 'atkin*892@gmail.com',
      dateCreated: '9/3/2025', // m/d/y
      username: "atkinsongeorge892",
      password: "040410",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 3500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 08, 2025',
        description: 'Wire Transfer from Norman kitt - XXXXXX3664',
        status: 'Success',
        amount_usd: 3500000.0
      },
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'RITA PAUL',
      email: 'r*@gmail.com',
      dateCreated: '10/11/2025', // m/d/y
      username: "rita_paul87",
      password: "PaulRita@136",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 25000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 10, 2025',
        description: 'Transfer From Natalie Rivers - XXXXXX3843',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        dateTime: 'October 5, 2025',
        description: 'Transfer From Greenfield Holdings Inc. - XXXXXX5444',
        status: 'Success',
        amount_usd: 17500.0
      },
      {
        dateTime: 'October 1, 2025',
        description: 'Transfer From Eric~Edward Oilfield company - XXXXXX6456',
        status: 'Success',
        amount_usd: 23500.0
      },
      {
        dateTime: 'September 14, 2025',
        description: 'Transfer from msc shipping company - XXXXXX7924',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'September 11, 2025',

        description: 'Maintenance fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 11, 2025',
        description: 'Transfer to Attorney ~ Joe Bradley - XXXXXX34345',
        status: 'Success',
        amount_usd: -20000.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Interest - XXXXXX9376',
        status: 'Success',
        amount_usd: 67000.0
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Concert Revenue – Nashville Show - XXXXXX1023',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'August 27, 2025',
        description: 'Transfer fee - XXXXXX3448',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'August 27, 2025',
        description: 'Transfer to Attorney ~ Joe Bradley - XXXXXX8472',
        status: 'Success',
        amount_usd: -42800.0
      },
      {
        dateTime: 'August 23, 2025',
        description: 'Streaming Royalty - Interest - XXXXXX5639',
        status: 'Success',
        amount_usd: 76450.0
      },
      {
        dateTime: 'August 20, 2025',
        description: 'Transfer fee - XXXXXX6483',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'August 20, 2025',
        description: 'Tour Bus Lease - XXXXXX2314',
        status: 'Success',
        amount_usd: -9200.0
      },
      {
        dateTime: 'August 15, 2025',
        description: 'Merchandise Sales – Online Store - XXXXXX4590',
        status: 'Success',
        amount_usd: 18750.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Hotel Accommodations – Dallas Tour - XXXXXX9806',
        status: 'Success',
        amount_usd: -6480.0
      },
      {
        dateTime: 'August 8, 2025',
        description: 'Transfer to Liam Wilson - XXXXXX63536',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'August 8, 2025',
        description: 'Collector’s Fiddle Purchase - XXXXXX3178',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'August 5, 2025',
        description: 'Ticket Revenue – Chicago Concert - XXXXXX6845',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'August 1, 2025',
        description: 'Utility & Studio Overhead - XXXXXX7529',
        status: 'Success',
        amount_usd: -2150.0
      },
      {
        dateTime: 'March 20, 2024',
        description: 'Transfer to Liam Wilson - XXXXXX1358',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'March 20, 2024',
        description: 'Studio sessions for duet album - XXXXXX1023',
        status: 'Success',
        amount_usd: -16900.0
      },
      {
        dateTime: 'January 15, 2024',
        description: 'New year merchandise sales - XXXXXX5738',
        status: 'Success',
        amount_usd: 14200.0
      },
      {
        dateTime: 'December 20, 2023',
        description: 'End-of-year royalty payout - XXXXXX6849',
        status: 'Success',
        amount_usd: 72500.0
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Transfer fee - XXXXXX3963',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Transfer to Attorney ~ Joe Bradley - XXXXXX3092',
        status: 'Success',
        amount_usd: -61800.0
      },
      {
        dateTime: 'August 20, 2023',
        description: 'TV appearance performance fee - XXXXXX4810',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'August 16, 2023',
        description: 'Maintenance fee - XXXXXX6464',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Merch booth sales (summer shows) - XXXXXX7291',
        status: 'Success',
        amount_usd: 18250.0
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Bus & equipment transport - XXXXXX1847',
        status: 'Success',
        amount_usd: -22600.0
      },
      {
        dateTime: 'April 15, 2023',
        description: 'Ticket revenue (Spring Concert Series) - XXXXXX3928',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'February 20, 2023',
        description: 'Studio rental for collaborations - XXXXXX1027',
        status: 'Success',
        amount_usd: -11400.0
      },
      {
        dateTime: 'December 15, 2022',
        description: 'Holiday album streaming royalties - XXXXXX5928',
        status: 'Success',
        amount_usd: 33700.0
      },
      {
        dateTime: 'November 20, 2022',
        description: 'Sponsorship payment (music gear brand) - XXXXXX7012',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'June 20, 2021',
        description: 'Ticket presales (Summer Tour, later canceled) - XXXXXX9401',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'April 15, 2021',
        description: 'Session musicians payroll - XXXXXX5739',
        status: 'Success',
        amount_usd: -35200.0
      },
      {
        dateTime: 'February 20, 2021',
        description: 'Grammy appearance stipend - XXXXXX2390',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'December 15, 2020',
        description: 'Holiday merchandise sales - XXXXXX9045',
        status: 'Success',
        amount_usd: 12400.0
      },
      {
        dateTime: 'September 20, 2020',
        description: 'Home studio equipment upgrade - XXXXXX1203',
        status: 'Success',
        amount_usd: -18300.0
      },
      {
        dateTime: 'July 15, 2020',
        description: 'Charity donation (COVID-19 relief) - XXXXXX1983',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'May 20, 2019',
        description: 'Streaming platform royalty deposit - XXXXXX2749',
        status: 'Success',
        amount_usd: 42600.0
      },
      {
        dateTime: 'March 15, 2019',
        description: 'Instrument insurance annual premium - XXXXXX4837',
        status: 'Success',
        amount_usd: -1750.0
      },
      {
        dateTime: 'February 20, 2019',
        description: 'Studio rental for recording sessions - XXXXXX5921',
        status: 'Success',
        amount_usd: -8200.0
      },
      {
        dateTime: 'January 15, 2019',
        description: 'Album royalty payment (2019 sales) - XXXXXX1083',
        status: 'Success',
        amount_usd: 55800.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Henry Jacob',
      email: 'henr**43@gmail.com',
      dateCreated: '10/11/2025', // m/d/y
      username: "henryjacob2143",
      password: "h@12345",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 5500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'November 23, 2024',
        description: 'Transfer From Williams Peter - XXXXXX3843',
        status: 'Success',
        amount_usd: 5500000.0
      },
    ]
  }
];
