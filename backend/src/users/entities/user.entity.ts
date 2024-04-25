import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Factory } from 'nestjs-seeder';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Factory((faker) => faker.person.firstName())
  first_name: string;

  @Column()
  @Factory((faker) => faker.person.lastName())
  last_name: string;

  @Column({ unique: true })
  @Factory((faker) => faker.internet.email())
  email: string;

  @Column()
  @Factory('org')
  organization: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
