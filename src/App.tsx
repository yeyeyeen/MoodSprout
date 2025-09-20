import React from "react"
import { useState } from "react"
import { BookOpen, FileText, Heart, Lightbulb, Target, Plus, Save } from "lucide-react"
import "./App.css";
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import { Textarea } from "./components/ui/textarea"
import { CardHeader, CardDescription, CardTitle, Card } from "./components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface JournalTemplate {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  prompts: string[]
}

interface JournalEntry {
  date: string
  content: string
  template: string
}

const journalTemplates: JournalTemplate[] = [
  {
    id: "daily-reflection",
    title: "Daily Reflection",
    description: "Reflect on your day with guided prompts",
    icon: <BookOpen className="h-5 w-5" />,
    prompts: [
      "Today's Mood & Reason",
      "Something I am Grateful for Today",
      "Something I Deserve Praise For",
      "Something I Did for Myself Today",
      "Something I Tried My Best Today",
      "What I Need to Do Tomorrow",
      "Memo",
      "The Feeling I Want to Wake Up With Tomorrow",
    ],
  },
  {
    id: "gratitude",
    title: "Gratitude Journal",
    description: "Focus on the positive aspects of your life",
    icon: <Heart className="h-5 w-5" />,
    prompts: [
      "Three things I'm grateful for today:",
      "Someone who made my day better:",
      "A small moment that brought me joy:",
      "Something about myself I appreciate:",
    ],
  },
  {
    id: "goal-setting",
    title: "Goal Setting",
    description: "Plan and track your personal goals",
    icon: <Target className="h-5 w-5" />,
    prompts: [
      "My main goal for today/this week:",
      "Steps I need to take:",
      "Potential obstacles:",
      "How I'll measure success:",
    ],
  },
  {
    id: "creative-writing",
    title: "Creative Writing",
    description: "Express yourself through creative prompts",
    icon: <Lightbulb className="h-5 w-5" />,
    prompts: [
      "Write about a memory that makes you smile:",
      "Describe your ideal day:",
      "If you could have dinner with anyone, who would it be?",
      "What would you tell your younger self?",
    ],
  },
  {
    id: "free-form",
    title: "Free Form",
    description: "Write whatever comes to mind",
    icon: <FileText className="h-5 w-5" />,
    prompts: ["Start writing..."],
  },
]

// function dailyReflectionButton() {
//   alert("You clicked daily reflection!");
// }

// function gratitudeJournalButton() {
//   alert("You clicked gratitude journal!");
// }

// function goalSettingButton() {
//   alert("You clicked goal setting!");
// }

// function creativeWritingButton() {
//   alert("You clicked creative writing!");
// }

// function freeFormButton() {
//   alert("You clicked free form!");
// }

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<JournalTemplate | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([])
  const [currentEntry, setCurrentEntry] = useState("")
  
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const getCurrentEntry = () => {
    const dateStr = formatDate(selectedDate)
    return journalEntries.find((entry) => entry.date === dateStr)
  }

  const saveEntry = () => {
    const dateStr = formatDate(selectedDate)
    const existingEntryIndex = journalEntries.findIndex((entry) => entry.date === dateStr)

    if (existingEntryIndex >= 0) {
      const updatedEntries = [...journalEntries]
      updatedEntries[existingEntryIndex] = {
        date: dateStr,
        content: currentEntry,
        template: selectedTemplate?.title || "Free Form",
      }
      setJournalEntries(updatedEntries)
    } else {
      setJournalEntries([
        ...journalEntries,
        {
          date: dateStr,
          content: currentEntry,
          template: selectedTemplate?.title || "Free Form",
        },
      ])
    }
  }

  const hasEntryForDate = (date: Date) => {
    const dateStr = formatDate(date)
    return journalEntries.some((entry) => entry.date === dateStr)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-sidebar-foreground">My Journal</h1>
          <p className="text-sm text-muted-foreground mt-1">Choose a template to get started</p>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {journalTemplates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedTemplate?.id === template.id
                    ? "ring-2 ring-sidebar-accent bg-sidebar-accent/10"
                    : "hover:bg-sidebar-accent/5"
                }`}
                onClick={() => setSelectedTemplate(template)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sidebar-accent/10 text-sidebar-accent">{template.icon}</div>
                    <div>
                      <CardTitle className="text-sm font-medium">{template.title}</CardTitle>
                      <CardDescription className="text-xs">{template.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              {selectedTemplate && (
                <Badge variant="secondary" className="mt-2">
                  {selectedTemplate.title}
                </Badge>
              )}
            </div>
            <Button onClick={saveEntry} className="gap-2">
              <Save className="h-4 w-4" />
              Save Entry
            </Button>
          </div>
        </div>

        {/* Writing Area */}
        <div className="flex-1 p-6">
          {selectedTemplate ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {selectedTemplate.prompts.map((prompt, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{prompt}</label>
                  <Textarea
                    placeholder="Start writing..."
                    className="min-h-[120px] resize-none"
                    value={currentEntry}
                    onChange={(e) => setCurrentEntry(e.target.value)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-muted w-16 h-16 mx-auto flex items-center justify-center">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Select a Template</h3>
                  <p className="text-muted-foreground">
                    Choose a journaling template from the sidebar to begin writing
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
