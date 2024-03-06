import React from 'react'

import { TodoActionBar, TodoForm, TodoList } from '@/components'

export const TodoSection: React.FC = () => <section className="py-12 md:py-16">
  <div className="container">
    <h1 className="mx-auto mb-10 text-center text-xl md:w-56 md:shrink-0
     md:text-2xl xl:w-96">
        Volt Todo App
    </h1>

    <div className="max-xl:space-y-10 xl:row-auto xl:grid xl:grid-cols-2
    xl:gap-8">
      <TodoForm />

      <div>
        <TodoActionBar />

        <TodoList />
      </div>
    </div>
  </div>
</section>
