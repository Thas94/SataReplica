
export interface AgendaResults {
    speakers:     Speaker[] | null;
    facilitators: Facilitator[] | null;
    panelMembers: PanelMember[] | null;
    agendaId:     number;
    dayId:        number;
    topic:        string;
    startTime:    string;
    endTime:      string;
}

export interface Facilitator {
    facilitatorId:   number;
    facilitatorName: string;
    agendaLinks:     any[];
}

export interface PanelMember {
    panelMemberId:   number;
    panelMemberName: string;
    agendaLinks:     any[];
}

export interface Speaker {
    speakerId:   number;
    speakerName: string;
    agendaLinks: any[];
}