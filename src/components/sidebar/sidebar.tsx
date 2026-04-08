import { prisma } from '@/lib/prisma';
import { SidebarContent } from './sidebar-content';

export const Sidebar = async () => {
  let prompts: Array<{ id: string; title: string; content: string }> = [];

  try {
    prompts = await prisma.prompt.findMany();
  } catch (error) {
    console.warn('[Sidebar] Unable to load prompts from database', error);
  }

  return <SidebarContent prompts={prompts} />;
};
