export function GetGroupColors(groupId: string) {
  const map: Record<string, { primary: string; secondary: string }> = {
    A: { primary: '#22c55e', secondary: '#facc15' }, 
    B: { primary: '#3b82f6', secondary: '#a855f7' },
    C: { primary: '#facc15', secondary: '#ef4444' }, 
    D: { primary: '#38bdf8', secondary: '#2563eb' }, 
    E: { primary: '#f97316', secondary: '#ef4444' },
    F: { primary: '#a855f7', secondary: '#3b82f6' },
    G: { primary: '#ef4444', secondary: '#22c55e' },
    H: { primary: '#facc15', secondary: '#16a34a' },
    I: { primary: '#3b82f6', secondary: '#22c55e' },
    J: { primary: '#f97316', secondary: '#facc15' },
    K: { primary: '#22c55e', secondary: '#3b82f6' },
    L: { primary: '#ef4444', secondary: '#facc15' }
  }

  return map[groupId] ?? { primary: '#22d3ee', secondary: '#3b82f6' }
}

export function useGroupTheme(groupId: string) {
  const colors = GetGroupColors(groupId)

  return {
    style: {
      '--primary': colors.primary,
      '--secondary': colors.secondary
    } as React.CSSProperties
  }
}
