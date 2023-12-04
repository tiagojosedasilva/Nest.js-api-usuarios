import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProvider = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'sqlite',
          database: 'db/sql',
          entities: [User],
          synchronize: true,
      
        });
        return dataSource.initialize();
      },
    },
  ];