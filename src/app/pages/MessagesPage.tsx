import React from "react";
import { ArrowLeft, MessageCircle, Phone, Send, ShieldCheck, UserRound } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const messages = [
  ["Family", "Mom checked in this morning and said she felt well.", "8:50 AM"],
  ["Care team", "Medication reminder is scheduled for lunch.", "9:15 AM"],
  ["Daughter", "I will visit after work today.", "10:05 AM"],
];

export function MessagesPage() {
  return (
    <div className="min-h-screen bg-[#f7faf8] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/elder">
            <Button variant="outline" className="bg-white">
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="size-4" />
            Call family
          </Button>
        </div>

        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <ShieldCheck className="size-4" />
            Family connection
          </div>
          <h1 className="text-4xl font-semibold sm:text-5xl">Messages and care updates</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Keep family members and care helpers aligned with clear updates in one place.
          </p>
        </section>

        <Card className="border-slate-200 bg-white shadow-sm">
          <CardContent className="p-0">
            {messages.map(([sender, text, time]) => (
              <div key={`${sender}-${time}`} className="flex gap-4 border-b border-slate-100 p-5 last:border-b-0">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {sender === "Family" ? <UserRound className="size-5" /> : <MessageCircle className="size-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">{sender}</p>
                    <p className="text-sm text-slate-500">{time}</p>
                  </div>
                  <p className="mt-1 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="mt-5 flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <input
            className="min-w-0 flex-1 rounded-xl bg-slate-50 px-4 text-base outline-none ring-1 ring-transparent focus:ring-blue-200"
            placeholder="Write a message to family"
          />
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="size-4" />
            Send
          </Button>
        </div>
      </main>
    </div>
  );
}
