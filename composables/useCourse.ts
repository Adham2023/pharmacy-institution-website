import type { ICourse } from './course'
import { useCourseStore } from './course'

export async function useCourse(courseSlug: string) {
  const store = useCourseStore()
  const { data: course, error } = await useFetch<ICourse>(`http://localhost:2000/courses/${courseSlug}`)

  if (!error.value && course.value)
    store.setCourse(course.value)
  else
    console.error('Failed to fetch course:', error.value)

  return { course: store.course_, error }
}
