import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg:
      "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'JACOB',
    lastName: 'GABRIELLE',
    email: 'chri**ntz8@gmail.com',
    username: 'Jacobgabrielle8',
    password: 'Am@12345',
    transactionCode: '7894',
    createdAt: '2026-4-27', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team on scrtbrclskinternet@gmail.com for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: 'T80 2011 1838 9538 6800',
        balance: 0.0,
        isPrimary: true,
        transactions: [
           {
            merchant: 'Wire Transfer to Christoph Kantz',
            category: '****6800',
            date: 'Apr 26, 2026',
            amount: 20000000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Olivia Carter',
            category: '****5831',
            date: 'Apr 26, 2026',
            amount: 1500000,
            status: 'success'
          },
          {
            merchant: 'Northbridge Analytics LLC',
            category: '****9921',
            date: 'Apr 24, 2026',
            amount: -420000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Mason Clark',
            category: '****7712',
            date: 'Apr 20, 2026',
            amount: 1750000,
            status: 'success'
          },
          {
            merchant: 'Blake Systems LLC',
            category: '****6672',
            date: 'Apr 18, 2026',
            amount: -310000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Ethan Brooks',
            category: '****1184',
            date: 'Apr 15, 2026',
            amount: 2200000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Ava Thompson',
            category: '****8842',
            date: 'Apr 10, 2026',
            amount: 950000,
            status: 'success'
          },
          {
            merchant: 'Cedarline Technologies Inc',
            category: '****2209',
            date: 'Apr 2, 2026',
            amount: -280000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sophia Reed',
            category: '****6023',
            date: 'Apr 5, 2026',
            amount: 1300000,
            status: 'success'
          },

          {
            merchant: 'Transfer from Lucas Bennett',
            category: '****4431',
            date: 'Mar 28, 2026',
            amount: 2100000,
            status: 'success'
          },
          {
            merchant: 'Orion Edge Systems LLC',
            category: '****1197',
            date: 'Mar 26, 2026',
            amount: -260000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Noah Walker',
            category: '****7745',
            date: 'Mar 22, 2026',
            amount: 1800000,
            status: 'success'
          },
          {
            merchant: 'Summit Peak Consulting Inc',
            category: '****3391',
            date: 'Mar 18, 2026',
            amount: -340000,
            status: 'success'
          },
          {
            merchant: 'Transfer from James Harris',
            category: '****4456',
            date: 'Mar 15, 2026',
            amount: 750000,
            status: 'success'
          },
          {
            merchant: 'Redwood Data Solutions LLC',
            category: '****5510',
            date: 'Mar 8, 2026',
            amount: 1600000,
            status: 'success'
          },

          {
            merchant: 'Transfer from Zainab Ali',
            category: '****7746',
            date: 'Feb 28, 2026',
            amount: 900000,
            status: 'success'
          },
          {
            merchant: 'Pinecrest Logistics Group',
            category: '****9902',
            date: 'Feb 25, 2026',
            amount: -410000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Peter Eze',
            category: '****3392',
            date: 'Feb 20, 2026',
            amount: 1250000,
            status: 'success'
          },
          {
            merchant: 'Orchard Bay Services LLC',
            category: '****2034',
            date: 'Feb 16, 2026',
            amount: -290000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Aisha Mohammed',
            category: '****6024',
            date: 'Feb 12, 2026',
            amount: 850000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Samuel Ajayi',
            category: '****1189',
            date: 'Feb 3, 2026',
            amount: 700000,
            status: 'success'
          },

          {
            merchant: 'Transfer from Emeka Obi',
            category: '****9903',
            date: 'Jan 25, 2026',
            amount: 1300000,
            status: 'success'
          },
          {
            merchant: 'Blueharbor Tech Group',
            category: '****6671',
            date: 'Jan 20, 2026',
            amount: -380000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Grace Nwosu',
            category: '****4457',
            date: 'Jan 10, 2026',
            amount: 1050000,
            status: 'success'
          },
          {
            merchant: 'Northfield Operations LLC',
            category: '****8820',
            date: 'Jan 5, 2026',
            amount: -260000,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
