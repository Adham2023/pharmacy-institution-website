import { acceptHMRUpdate, defineStore } from 'pinia'

export enum LessonContentFormat {
  Text = 'text',
  Video = 'video',
  PDF = 'pdf',
  Image = 'image',
}

export enum EQuestionAnswerType {
  MCQ = 'MCQ',
  SCQ = 'SCQ',
}

export interface Question {
  text: string
  question_type: EQuestionAnswerType
  options: {
    id: string
    text: string
  }[]
  correctAnswers: number[] // index of an option
  points: number
}

export interface UploadUserFile { name: string; url: string }

export interface ILessonContent {
  order: number
  format: LessonContentFormat
  text?: string
  videoUrl?: UploadUserFile[]
  pdfUrl?: UploadUserFile[]
  imageUrl?: UploadUserFile[]
}

export interface ILesson {
  _id: string
  order: number
  title: string
  slug: string
  contents: ILessonContent[] // Assuming ModuleContent is a sub-document or referenced schema
  is_public: boolean
  is_deleted: boolean
}

export interface ISection {
  _id: string
  order: number
  title: string
  slug: string
  description: string
  lessons: ILesson[] // Assuming ModuleContent is a sub-document or referenced schema
  is_public: boolean
  questions: Question[]
  is_deleted: boolean
  minimum_points_to_pass: number
}
export interface ICourse {
  _id: string
  createdAt: string
  is_public: boolean
  updatedAt: string
  course_poster: string
  title: string
  slug: string
  description: string
  sections: ISection[] | any // Assuming this is an array of Section documents
  price: number
  discounts: {
    date: string | Date
    is_active: boolean
    percent: number
  }[]
  is_deleted: boolean
  questions: Question[]
  minimum_points_to_pass: number
}

export const useCourseStore = defineStore('course', () => {
  const course_ = ref<ICourse | null>(null)
  const chapter = ref<any>(null)
  const lesson = ref<any>(null)

  function setCourse(course: ICourse) {
    course_.value = course
  }
  function setCurrentChapter(chapterSlug: string) {
    if (course_.value)
      chapter.value = course_.value.sections.find((sec: ISection) => sec.slug.includes(chapterSlug))
  }
  function setCurrentLesson(lessonSlug: string) {
    if (chapter.value)
      lesson.value = chapter.value.lessons.find((les: ILesson) => les.slug.includes(lessonSlug))
  }

  return {
    course_,
    setCourse,
    chapter,
    lesson,
    setCurrentChapter,
    setCurrentLesson,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
