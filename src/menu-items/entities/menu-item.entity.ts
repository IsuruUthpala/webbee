import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  // @Column({ type: 'integer', default: null })
  // parentId: number;

  @TreeParent()
  parent: MenuItem;

  @Column({ type: 'datetime' })
  createdAt: string;

  @TreeChildren()
  children: MenuItem[];

  // didn't generate any migrations just proving concept
}
