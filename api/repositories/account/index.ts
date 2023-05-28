export interface AccountDetails {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
}

let accounts: AccountDetails[] = [
    { id: 1, name: 'John Doe', address: '123 test St', phone: '555-1234', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', address: '456 test St', phone: '555-5678', email: 'jane.smith@example.com' },
    { id: 3, name: 'John Joe', address: '123 Main St', phone: '555-1263', email: 'john.joe@example.com' },
    { id: 4, name: 'Jane Jones', address: '456 Elm St', phone: '555-9532', email: 'jane.jones@example.com' },
    { id: 5, name: 'John Bones', address: '123 alsotest St', phone: '555-6345', email: 'john.bones@example.com' },
    { id: 6, name: 'Jane Doe', address: '456 also St', phone: '555-1453', email: 'jane.doe@example.com' }
]

export async function getAccountDetails(accountId: number) : Promise<AccountDetails> {
    const account: AccountDetails | undefined = accounts.find(acc => acc.id === accountId);

  if (account) {
    return Promise.resolve(account);
  } else {
    throw new Error('Account not found');
  }
}